import Koa, { Context } from 'koa';

const app = new Koa();

app.use(async (ctx: Context) => {
  ctx.body = { framework: 'koa', message: 'hello world!' };
});

app.listen(4000, () => {
  console.log('Listening to port 4000');
});

export default app;
