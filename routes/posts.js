import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()
import * as postsCtrl from '../controllers/posts.js'

//GET localhost:3000/posts 
router.get('/', postsCtrl.postsIndex)

//GET localhost:3000/posts/:id
router.get('/:id', postsCtrl.postsShow)

//POST localhost:3000/posts
router.post('/', isLoggedIn, postsCtrl.createPost)

export {
  router,
}