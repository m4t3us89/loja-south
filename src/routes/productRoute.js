import { Router } from 'express'

import authorizationMidd from '../middlewares/authorizationMidd.js'

const router = Router()

const NAME_BASE = '/product'

router.get(NAME_BASE ,authorizationMidd, (req,res)=>res.json('Olá mundo'))

export default router