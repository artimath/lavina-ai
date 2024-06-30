import { AutoRouter } from 'itty-router';

const router = AutoRouter();

router
  .get('/api/:path', ({ request, env, ctx }) => {
    return new Response('Hello, world!');
  })
  .all('*', ({ request, env, ctx }) => {
    return env.ASSETS.fetch(request);
  });

export default router;
