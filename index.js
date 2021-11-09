const http = require('http')

let notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:21.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can only execute Javascript',
    date: '2019-05-30T18:39:34:091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify(notes))
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)