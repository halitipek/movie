import axios from 'axios'

export const fetchData = (keyword) => {
  return axios
    .get('/api/search', {
      params: {
        keyword
      },
      timeout: 5000
    })
    .then(res => res.data)
    .catch(err => ({ response: false, error: err.message }))
}