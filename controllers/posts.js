import { Post } from '../models/post.js'

function postsindex(req, res) {
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

export {
  postsindex,
}



