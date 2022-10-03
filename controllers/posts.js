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

// function createPost(req, res, next) {
//   req.body.owner = req.user.profile._id
//   Post.create(req.body)
//   then(post => {
//     res.redirect(`/posts`)
//   })
//   .catch(err => {
//   console.log(err)
//   res.redirect('/posts/')
//   })
// }

// function show (req, res) {
//   Post.findById(req.body) //params
//   .populate("owner")
//   .then(post => {
//     res.render('posts/postsShow', {
//       post,
//     })
//   })
//   .catch(err => {
//     console.log(err)
//     res.redirect('/posts/')
//   })
// }




export {
  newPost as new,
  postsIndex,
}