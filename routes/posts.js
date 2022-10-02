import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()
import * as postsCtrl from '../controllers/posts.js'

//GET localhost:3000/posts 
router.get('/', postsCtrl.postsIndex)

//POST localhost:3000/posts
router.post('/', isLoggedIn, postsCtrl.createPost)

export {
  router,
}