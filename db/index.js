const express = require('express')
const parser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(parser.json())
app.use(cors())

app.post('/auth', (req, res) => {
  res.send({
    message: req.body.text
  })
})

app.listen(process.env.PORT || 3000)
