/* eslint-disable @typescript-eslint/no-unused-vars */
// import { AutoRouter } from 'itty-router';
import { Hono } from 'hono';

import { Env } from './worker-configuration';

// const router = AutoRouter();

const app = new Hono<{ Bindings: Env }>();

app
  .get('/api/*', ( ctx ) => {
    return new Response('Hello, world!');
  })

app.get('*', (ctx) => {
    return ctx.env.ASSETS.fetch(ctx.req.raw

    );
  }) satisfies ExportedHandler<Env>;

export default {
  fetch: app.fetch,
};
