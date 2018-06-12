const router = require('koa-router')()
const service = require('../server/user');

// router.prefix('/users')

router.get('/proxy/users/bar', async (ctx, next) => {
  let res = await service().getDetail();
  const json = await res.json();
  if (!json.errorCode) {
    ctx.body = json;
    ctx.set('Content-type', 'application/json;charset=utf-8')
  }

  router.post('/proxy/user/signIn', async (ctx) => {
    let body = ctx.request.body;
    let res = await service(body).signIn();
    const json = await res.json();
    if (!json.errorCode) {
      ctx.body = json;
      ctx.set('Content-type', 'application/json;charset=utf-8')
    }
  })


})

module.exports = router
