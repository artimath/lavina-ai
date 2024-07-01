import { Hono } from 'hono';

import { Env } from './worker-configuration';

// import { AutoRouter } from 'itty-router';
// const router = AutoRouter();

const app = new Hono<{ Bindings: Env }>();

app.post('/api/*', async (ctx) => {
  console.log(ctx.req.raw);
  const body = await ctx.req.formData();
  const prompt = body.get('prompt');
  console.log(body);
  console.log(ctx.req.url);
  const messages = [
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
  const response = await ctx.env.AI.run('@hf/nousresearch/hermes-2-pro-mistral-7b', {
    messages,
    tools,
  });

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
