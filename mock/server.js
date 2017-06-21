const app = require('koa')()
const router = require('koa-router')()
const koaBody = require('koa-body')()
const homeInfo = require('./HomeModule')

router.get('/api', function *(next){
  this.body = 'hello koa!'
})

router.get('/api/czth', function *(next){
  this.body = homeInfo.czth.data
})

router.get('/api/ttlj', function *(next){
  this.body = homeInfo.ttlj.data
})

router.get('/api/cnxh/:page', function *(next){
  const response = homeInfo.cnxh.data
  response.startNum = this.params.page
  this.body = response
  console.log('current page', this.params.page)
})

router.post('/api/post', koaBody, function *(next) {
    console.log(this.request.body)
    this.body = JSON.stringify(this.request.body)
});

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3000);
