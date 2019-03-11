import express from 'express'

import search from './search'
import cache from './cache'

const router = express.Router()

router.use('/search', search)
router.use('/cache', cache)

export default router