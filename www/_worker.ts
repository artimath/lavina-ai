/* eslint-disable @typescript-eslint/no-unused-vars */
// import { AutoRouter } from 'itty-router';
import { Hono } from 'hono';

import { Env } from './worker-configuration';

// const router = AutoRouter();

const app = new Hono<{ Bindings: Env }>();

app
  .post('/api/*', async ( ctx ) => {
    const prompt = ctx.req.query('prompt');
    console.log(prompt);
    console.log(ctx.req.url);
    const response:AiTextGenerationOutput = await ctx.env.AI.run(
      "@hf/nousresearch/hermes-2-pro-mistral-7b",
      {
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      tools: [
        {
          name: "getWeather",
          description: "Return the weather for a latitude and longitude",
          parameters: {
            type: "object",
            properties: {
              latitude: {
                type: "string",
                description: "The latitude for the given location",
              },
              longitude: {
                type: "string",
                description: "The longitude for the given location",
              },
            },
            required: ["latitude", "longitude"],
          },
        },
      ],
    });
    
    return new Response(JSON.stringify(response.tool_calls));
    return ctx.text(prompt || 'no prompty');
  })

app.get('*', (ctx) => {
    return ctx.env.ASSETS.fetch(ctx.req.raw

    );
  }) satisfies ExportedHandler<Env>;

export default {
  fetch: app.fetch,
};
