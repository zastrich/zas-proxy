const Koa = require("koa")
const proxyBetter = require('koa-better-http-proxy')

const { URL, PORT } = require("./config")

const app = new Koa()

app.use(proxyBetter(URL, {
  userResHeadersDecorator: (headers, req, res) => {
    headers['access-control-allow-origin'] = '*'
    headers['access-control-allow-headers'] = '*'
    headers['access-control-allow-methods'] = '*'

    headers['proxy-redirected'] = URL

    return headers
  }
}))

app.listen(PORT)

console.log(`listening on http://localhost:${PORT}`)