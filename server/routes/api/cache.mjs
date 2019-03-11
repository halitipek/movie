import express from 'express'
import { redisClient, fetchKeywordDataFromOmdb, getNowSeconds, to } from '../../utils'

const router = express.Router()

// Refresh cache
router.get('/refresh', async (req, res) => {
  const keys = await to(redisClient.keysAsync('*'))

  if (!keys.status) {
    res.json({ success: false, message: 'Some error occured with redis server!', error: keys.err })
  } else if (keys.res.length === 0) {
    res.json({ success: true, message: 'There is no cache', keys: keys.res })
  } else {
    keys.res.forEach(async (keyword, i, arr) => {
      const newData = await fetchKeywordDataFromOmdb(keyword)
      redisClient.hmset(keyword, 'value', JSON.stringify(newData), 'time', getNowSeconds())
      
      if (i + 1 === arr.length) {
        res.json({ success: true, message: 'All cached keys are refreshed', keys: arr })
      }
    })
  }

  return
})

// Flush cache
router.get('/flush', (req, res) => {
  redisClient.flushdb( function (err, succeeded) {
    res.json({ success: err ? false : succeeded })
  })
})

export default router