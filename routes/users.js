const router = require('koa-router')()
const service = require('../server/user');

router.prefix('/v1')

router.get('/users/bar', async (ctx, next) => {
  const token = ctx.request.header['bit-token'];
  let res = await service(token).getDetail();
  const json = await res.json();
  ctx.body = json;
  ctx.set('Content-type', 'application/json;charset=utf-8')
})

router.post('/user/signIn', async (ctx) => {
  let body = ctx.request.body;
  let res = await service().signIn(body);
  const json = await res.json();
  ctx.body = json;
  ctx.set('Content-type', 'application/json;charset=utf-8')
})

router.get('/community/building/page', async (ctx, next) => {
  const token = ctx.request.header['bit-token'];
  let query = ctx.request.query;
  let res = await service(token).getTable(query);
  const json = await res.json();
  ctx.body = json;
  ctx.set('Content-type', 'application/json;charset=utf-8')
})

module.exports = router
