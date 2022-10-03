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

// //GET localhost:3000/posts/:id/edit  .edit
// router.get('/:id/edit',)


//POST localhost:3000/posts
router.post('/', postsCtrl.create)

//PUT localhost:3000/posts/:id   .update

//DELETE localhost:3000/posts/:id  .delete











//GET localhost:3000/posts/:id
//router.get('/:id', postsCtrl.show) //postsShow

//POST localhost:3000/posts
//router.post('/', isLoggedIn, postsCtrl.createPost)

export {
  router,
}