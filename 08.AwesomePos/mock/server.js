var Koa = require('koa')
var Router = require('koa-router')
var app = new Koa()
var router = new Router()

app
  .use(router.routes())
  .use(router.allowedMethods());


const typeGoods = require('./typeGoods')
const oftenGoods = require('./oftenGoods')


router.get('/api/oftenGoods',(ctx)=>{
  console.log('代理成功')
  ctx.body=oftenGoods

});

router.get('/api/typeGoods',(ctx)=>{
  console.log('代理成功')
  ctx.body=typeGoods

});

router.get('/api/checkout',(ctx)=>{
  let queryString = ctx.querystring
  console.log('代理成功',queryString)
  ctx.body='订单提交成功'

});

app.listen(3000, ()=>{console.log('success')})
