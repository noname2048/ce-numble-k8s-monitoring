import fs from 'fs'

import Koa, { Context } from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();

router.get('/', async (ctx: Context) => {
  ctx.body = { framework: 'koa', message: 'hello world!' };
});

router.options('/favicon.ico', async(ctx:Context) => {
  ctx.status = 200;
  ctx.set('Allow', 'GET, HEAD, OPTIONS')
})

router.get('/favicon.ico', async (ctx: Context) => {
  ctx.set('Cache-Control', `public, max-age=${86400000 / 1000 | 0}`)
  ctx.type= 'image/x-icon';
  ctx.body = fs.readFileSync('./favicon.ico')
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(4000, () => {
  console.log('Listening to port 4000');
});

export default app;
