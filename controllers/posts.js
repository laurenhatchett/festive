import { Post } from '../models/post.js'


function postsIndex(req, res) {
  Post.find({})
  .then(posts => {
    res.render('posts', {
      posts,
      title: 'Add Post!'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/posts/new')
  })
}

function newPost(req, res) {
  res.render('posts/new', {
    title: 'Add Post!'
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Post.create(req.body)
  .then(post => {
    res.redirect('/posts')
  })
  .catch(err => {
  console.log(err)
  res.redirect('/posts')
  })
}

function show(req, res) {
  Post.findById(req.params.id)
  .populate("owner")
  .then(post => {
    res.render('posts/:id', {
      post,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/posts/new')
  })
}





export {
  newPost as new,
  postsIndex,
  create,
  show,
}