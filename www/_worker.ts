import {
  Ai,
  AiTextGenerationOutput,
  AiTextGenerationToolInput,
  BaseAiTextGenerationModels,
  RoleScopedChatInput,
} from '@cloudflare/workers-types';
import { Schema } from '@effect/schema';
import { Effect, pipe } from 'effect';
import { Hono } from 'hono';

import { Env } from './worker-configuration';

const messages = (prompt: string): RoleScopedChatInput[] => [
  {
    role: 'user',
    content: prompt || '',
  },
];
const tools = [
  {
    name: 'getWeather',
    description: 'Return the weather for a latitude and longitude',
    parameters: {
      type: 'object',
      properties: {
        latitude: {
          type: 'string',
          description: 'The latitude for the given location',
        },
        longitude: {
          type: 'string',
          description: 'The longitude for the given location',
        },
      },
      required: ['latitude', 'longitude'],
    },
  },
];

//schemas
const PromptSchema = Schema.Struct({
  prompt: Schema.String,
});

const WeatherParamsSchema = Schema.Struct({
  latitude: Schema.String,
  longitude: Schema.String,
});

const WeatherToolSchema = Schema.Struct({
  name: Schema.String,
  description: Schema.String,
  parameters: WeatherParamsSchema,
});

const AiResponseSchema = Schema.Struct({
  tool_calls: Schema.Array(WeatherToolSchema),
  content: Schema.String,
});

const getWeather = (params: Schema.Schema.Type<typeof WeatherParamsSchema>) =>
  Effect.succeed({ temperature: 25, conditions: 'Sunny' });

const runAI = (
  ai: Env['AI'],
  model: BaseAiTextGenerationModels,
  messages: RoleScopedChatInput[],
  tools: AiTextGenerationToolInput[]
) => Effect.tryPromise(() => ai.run(model, { messages, tools }));

// import { AutoRouter } from 'itty-router';
// const router = AutoRouter();

const app = new Hono<{ Bindings: Env }>();

app.post('/api/*', async (ctx) => {
  const body = await ctx.req.formData();
  return pipe(
    Effect.succeed({ prompt: body.get('prompt') }),
    Effect.flatMap((prompt) => Schema.decode(PromptSchema)(prompt)),
    Effect.flatMap(({ prompt }) =>
      runAI(ctx.env.AI, '@hf/nousresearch/hermes-2-pro-mistral-7b', messages(prompt), tools)
    )
  );
  const promptResult = Schema.decodeSync(PromptSchema)({ prompt: body.get('prompt') });
  const prompt = body.get('prompt');

  // fix by pulling out functions like: https://github.com/cloudflare/ai-utils/blob/main/src/runWithTools.ts
  const response = await runFunctionSchemaGeneration(
    ctx.env.AI,
    '@hf/nousresearch/hermes-2-pro-mistral-7b',
    messages,
    tools
  );

  // Log the response to understand its structure
  console.log(response);

  // Handle the response based on its actual structure
  if (response.tool_calls) {
    return new Response(JSON.stringify(response.tool_calls));
  } else {
    return new Response(JSON.stringify(response));
  }
});

app.get('*', (ctx) => {
  return ctx.env.ASSETS.fetch(ctx.req.raw);
});

export default {
  fetch: app.fetch,
};
async function runFunctionSchemaGeneration(
  ai: Ai,
  model: BaseAiTextGenerationModels,
  messages: RoleScopedChatInput[],
  tools: AiTextGenerationToolInput[]
): Promise<AiTextGenerationOutput> {
  return await ai.run('@hf/nousresearch/hermes-2-pro-mistral-7b', {
    messages,
    tools,
  });
}
