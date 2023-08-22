const express = require('express')
const app = express()
const hostname="localhost"
const post = "8017"
app.get('/', function (req, res) {
  res.send('<h1>Xin Chao Nguyen Quang Hai</h1>')
})

app.listen(post,hostname, () => {
    console.log("Xin chao quang Hai")
})