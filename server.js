var express    = require('express')
var bodyParser = require('body-parser')
var Postit       = require('./models/post')


var app = express()
app.use(bodyParser.json())

app.get('/',function(req, res) {
	res.sendfile('layouts/posts.html')
}) 

app.get('/api/posts', function (req, res, next) {
  Postit.find(function (err, posts) {
    if (err) { return next(err) }
    res.json(posts)
  })
})

app.post('/api/new', function (req, res, next) {
  var post1 = new Postit({
    username: req.body.username,
    contenu:     req.body.contenu
  });
  console.log('obj1='+req.body);
  post1.save(function (err, post1) {
	  console.log('obj2='+post1);
    if (err) { console.log('erreur: '+err) }
    res.status(201).json(post1)
  })
})

app.listen(3000, function () {
  console.log('server listening on', 3000)
})
