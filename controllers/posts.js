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
    console.log(post)
    res.redirect(`/posts/${post._id}`)
  })
  .catch(err => {
  console.log(err)
  res.redirect('/posts/new')
  })
}

function show(req, res) {
  Post.findById(req.params.id)
  .populate('owner')
  .then(post => {
    res.render('posts/show', {
      post,
      title: 'Are you ready to submit your post? '
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/posts/new')
  })
}

function edit(req, res) {
  Post.findById(req.params.id)
  .populate('owner')
  .then(post => {
    res.render('posts/edit', {
      post: post,
      title: 'Update Post'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/posts/show')
  })
}




export {
  newPost as new,
  postsIndex,
  create,
  show,
  edit,
}