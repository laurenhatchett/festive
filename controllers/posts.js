import { Post } from '../models/post.js'
import { Profile } from '../models/profile.js'


function postsIndex(req, res) {
  Post.find(req.query)
  .then(posts => {
    res.render('posts', {
      posts,
      title: req.query ? req.query.category : "View posts"
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
  console.log('CREATE HIT')
  req.body.owner = req.user.profile._id
  Post.create(req.body)
  .then(post => {
    console.log(post)
    Profile.updateOne(
      {_id:req.user.profile._id},
      {$push:{posts:post}}
    )
    .then(()=>{
      res.redirect(`/posts/${post._id}`)
    })
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
  .then (post => {
    res.render('posts/edit', {
      post,
      title: 'Update Post'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function deletePost(req, res) {
  Post.findById(req.params.id)
  .then(post => {
    post.delete()
    res.redirect('/posts')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function update(req, res){
  Post.findByIdAndUpdate(req.params.id, req.body)
  .then(post => {
    if (post.owner.equals(req.user.profile._id)){
      post.updateOne(req.body)
      then(updatedPost =>{
        res.redirect(`/posts/${post._id}`)
      })
    } else {
      throw new Error('NOT AUTHORIZED')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}


export {
  newPost as new,
  postsIndex,
  create,
  show,
  edit,
  deletePost as delete,
  update,
}