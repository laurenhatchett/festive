import { Router } from 'express'

const router = Router()
import * as postsCtrl from '../controllers/posts.js'

//GET localhost:3000/posts 
router.get('/', postsCtrl.postsindex)

export {
  router,
}