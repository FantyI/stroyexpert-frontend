import axios from 'axios'
const example = axios.create({
   baseURL: process.env.REACT_APP_BASE_URL
})

example.interceptors.request.use(config => {
   config.headers['Authorization'] = ''
   return config
})

export default example