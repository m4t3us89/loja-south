import { Router } from 'express'

import canallowMdd from '../middlewares/canallowMdd.js'

import { list, show, remove, update, create } from '../controllers/productController.js'

const router = Router()

const NAME_BASE = '/product'

router.get(NAME_BASE ,canallowMdd('M'), list)

router.get(NAME_BASE + '/:id', canallowMdd('M', 'C'), show)

router.post(NAME_BASE ,canallowMdd('M','A'), create)

router.put(NAME_BASE + '/:id', canallowMdd('M', 'A'),  update)

router.delete(NAME_BASE + '/:id',canallowMdd('M', 'A'),  remove)

export default router