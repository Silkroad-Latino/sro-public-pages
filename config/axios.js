import axios from 'axios'

const axiosFetch = axios.create({
  baseURL: 'http://localhost:3030/',
  headers: {
    'content-type': 'application/json',
  }
})

export default axiosFetch;