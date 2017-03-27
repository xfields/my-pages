const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();
const port = process.env.NODE_ENV === 'development' ? 3000 : 80

app.use(serve('.'));
app.use(serve('pages'));
app.listen(port);

console.log(`listening on port ${port}`);
