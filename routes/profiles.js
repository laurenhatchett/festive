import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

//GET localhost:3000/profiles/index
router.get('/index', isLoggedIn, profilesCtrl.index)

//GET
router.get('/:id', isLoggedIn, profilesCtrl.show)

export {
  router
}
