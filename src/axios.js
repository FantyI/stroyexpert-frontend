import axios from 'axios'
const example = axios.create({
   baseURL: 'http://localhost:3000/api'
})

example.interceptors.request.use(config => {
   config.headers['Authorization'] = window.localStorage.getItem('token') || ''
   return config
})

export default example