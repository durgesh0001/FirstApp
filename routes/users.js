var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/mydb');
// var Blog=require('../mongoconfig');
var mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/mydb');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});
var Blog = mongoose.model('Blog', blogSchema);
 

// a setter 


router.get('/get', function(req, res, next) {
var post = new Blog();
res.send(post);

});

/* GET users listing. */
router.get('/', function(req, res, next) {
var post = new Blog();
 
// create a comment 
post.comments.push({ title: 'My comment' });
 
post.save(function (err) {
  if (!err) console.log('Success!');
});
});


module.exports = router;
