const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb+srv://brant:password@cluster0-asttb.mongodb.net/MySecret?retryWrites=true')

mongoose.connection.once('open', function () {
  console.log('connected')
})

const test = mongoose.model('newOne', new mongoose.Schema({
  user: {type: String, require: true},
  age: {type: Number, require: true}
}))
/**
test.create({
  user: 'zhaohui',
  age: 26
}, function (err, doc) {
  if (!err) {
    console.log(doc)
  } else {
    console.log(err)
  }
})
*/
app.get('/', function (req, res) {
 	res.send('<h1>Hello<h1/>')
})

app.get('/zhaohui', function (req, res) {
  test.find({}, function (err, doc) {
    res.json(doc)
  })
})

app.listen(9093, function () {
  console.log('Node app start')
})
