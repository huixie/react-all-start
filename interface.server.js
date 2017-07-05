const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {
  let content = ''
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Headers': 'Content-Type,token',
    'Access-Control-Request-Method': 'POST'
  })
  try {
    content = fs.readFileSync(path.resolve(__dirname) + req.url)
  } catch (e) {
    content = ''
  }
  setTimeout(() => {
    res.write(content)
    res.end()
  }, 1000)
}).listen(8080)
