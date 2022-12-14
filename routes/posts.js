import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

//GET localhost:3000/posts 
router.get('/', postsCtrl.postsIndex)

//GET localhost:3000/posts/new
router.get('/new', postsCtrl.new)

//GET localhost:3000/posts/:id
router.get('/:id', postsCtrl.show)

//GET localhost:3000/posts/:id/edit  
router.get('/:id/edit', postsCtrl.edit)

//POST localhost:3000/posts
router.post('/', postsCtrl.create)

//POST localhost:3000/posts/:id/comments
router.post('/:id/comments' ,postsCtrl.createComments)

//PUT localhost:3000/posts/:id
router.put('/:id', postsCtrl.update)

//DELETE localhost:3000/posts/:id
router.delete('/:id', postsCtrl.delete)

//DELETE localhost:3000/posts/:postId/comments/:commentId
router.delete('/:postId/comments/:commentId', postsCtrl.deleteComments)











//GET localhost:3000/posts/:id
//router.get('/:id', postsCtrl.show) //postsShow

//POST localhost:3000/posts
//router.post('/', isLoggedIn, postsCtrl.createPost)

export {
  router,
}