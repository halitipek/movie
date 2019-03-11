import axios from 'axios'
import redis from 'redis'
import bluebird from 'bluebird'

bluebird.promisifyAll(redis)

export const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD
})

export const omdbSearchRequest = (keyword, pageNumber = 1) => axios('http://www.omdbapi.com/', {
  params: {
    apikey: process.env.API_KEY,
    s: keyword,
    page: pageNumber
  }
})

export const fetchKeywordDataFromOmdb = (keyword, request = omdbSearchRequest) => {
  return new Promise (async resolve => {
    let data = {
      response: true,
      search: []
    }

    const results = await Promise.all([
      request(keyword),
      request(keyword, 2)
    ])

    results.forEach((result, i) => {
      if (result.data.Response === "True") {
        data.search = [...data.search, ...result.data.Search]
      } else if (i === 0) {
        data.response = false
        data.error = result.data.Error
      }
    })

    resolve(data)
  })
}

export const getNowSeconds = () => {
  return Math.round(new Date().getTime() / 1000)
}

export const to = (promise) => {
  return new Promise(resolve => {
    promise
      .then(res => resolve({ status: true, res }))
      .catch(err => resolve({ status: false, err }))
  })
}