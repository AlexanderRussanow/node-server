const http = require('http')
const fs = require('fs')
const path = require('path')
const createPath = require('./utility/createPath.js')

const PORT = 5555

// http server
const server = http.createServer((req, res) => {
   res.writeHead(200, { 'Content-Type': 'text/html' })

   let basePath = '';

   switch (req.url) {
      case '/':
      case '/home':
      case '/index.html':
         basePath = createPath('index')
         res.statusCode = 200
         break
      case '/contact':
         basePath = createPath('contact')
         res.statusCode = 200
         break
      case '/about-us':
         res.statusCode = 301
         res.setHeader('Location', '/contact')
         res.end()
         break
      default:
         basePath = createPath('error')
         res.statusCode = 404
         break
   }

   fs.readFile(basePath, (err, data) => {
      if (err) {
         console.log(err)
         res.end()
      }
      res.write(data)
      res.end()
   })
})

server.listen(PORT, 'localhost', (err) => {
   err ? console.log(err) : console.log(`Server is running on port ${PORT}`)
})

