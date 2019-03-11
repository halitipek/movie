import express from 'express'
import { redisClient, fetchKeywordDataFromOmdb, getNowSeconds, to } from '../../utils'

const router = express.Router()

router.get('/', async (req, res) => {
  const { keyword } = req.query

  const cache = await to(redisClient.hgetallAsync(keyword))

  if (!cache.status || !cache.res) {
    var data = await fetchKeywordDataFromOmdb(keyword)
    redisClient.hmset(keyword, 'value', JSON.stringify(data), 'time', getNowSeconds())
  } else {
    var data = JSON.parse(cache.res.value)
  }

  res.set({
    'Cache-Control': 'public, max-age=30, only-if-cached'
  })
  res.json(data)

  if (cache.status && cache.res && getNowSeconds() - cache.res.time > 60) {
    const newData = await fetchKeywordDataFromOmdb(keyword)
    redisClient.hmset(keyword, 'value', JSON.stringify(newData), 'time', getNowSeconds())
  }
})

export default router