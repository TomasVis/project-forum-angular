const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

let posts = JSON.parse(fs.readFileSync('./data.json'));

app.use(cors());
app.use(express.static('public'));

app.get('/posts',urlencodedParser, function(req, res) {
  res.json(posts);
});

app.get('/get-post',urlencodedParser, function(req, res) {
  if(req.query.id) {
    let post = posts.find(x => x.id === Number(req.query.id));
    res.json(post);
  } else res.json("no-data");

});

app.get('/delete-post',urlencodedParser, function(req, res) {
  if(req.query.id) {
    let index = posts.findIndex(obj => Number(obj.id) === Number(req.query.id));
    posts.splice(index,1);
    res.json("post was deleted");
  } else res.json("no post to delete");

});

app.post('/update-post',jsonParser, function(req, res) {
  if(req.query.id){
      req.body.id = Number(req.query.id);
      let index = posts.findIndex(obj => Number(obj.id) === Number(req.body.id));
      let newObject = {...posts[index], ...req.body};
      posts[index] = newObject;
  } else {
    posts.push(createNewPost(req.body));
  }
  res.json('complete');
});

app.listen(3000, function() {
  console.log('CORS-enabled web server listening on port 3000');
});

let createNewPost = (postData) => {
  let newPost = {
    id: nextId,
    date: postData.date,
    author: postData.author,
    photo:'https://randomuser.me/api/portraits/lego/1.jpg',
    userTag: 'Reviewer',
    views:0,
    answers:0,
    votes:0,
    tags:['android', 'apple', 'apps', 'google', 'technology'],
    category: 'Mobile',
    title: postData.title,
    content: postData.content
  };
  nextId++
return newPost;
};

let nextId = posts.length;