import { Post } from '../models/post.js'

function postsIndex(req, res) {
  Post.find({})
  .then(posts => {
    res.render('posts/index', {
      posts,
      title: "Add Post!"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function createPost(req, res, next) {
  req.body.owner = req.user.profile._id
  Post.create(req.body)
  then(post => {
    res.redirect(`/posts`)
  })
  .catch(err => {
  console.log(err)
  res.redirect('/posts/')
  })
}



export {
  postsIndex,
  createPost,
}



