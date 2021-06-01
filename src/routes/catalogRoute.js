import { Router } from 'express'

import authorizationMidd from '../middlewares/authorizationMidd.js'

const router = Router()

const BASE_NAME = '/catalog'

router.get(BASE_NAME , authorizationMidd,(req,res)=>{res.json('Olá Mundo')})

export default router
