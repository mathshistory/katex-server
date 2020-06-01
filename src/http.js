#!/usr/bin/env node

import express from 'express'
import katex from 'katex'

// get the port, setup the app
const port = process.argv.length > 2 ? process.argv[2] : 5002
const app = express()
app.use(express.json())

app.post('/', function(request, response) {
  const input = request.body

  const output = input.map(formula => {
    return katex.renderToString(formula, {
      throwOnError: false
    })
  })

  response.set('Content-Type', 'text/json')
  response.send(output)
})

app.listen(port)
console.log(`Listening at http://127.0.0.1:${port}`)
