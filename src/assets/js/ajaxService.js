import axios from 'axios'
let AUTH_TOKEN = 'c1b2ba41-0067-46f3-a258-45bf5280bd78'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
var instance = axios.create({
})
instance.defaults.headers.common['token'] = AUTH_TOKEN
instance.interceptors.request.use(config => {
  if (AUTH_TOKEN) {
    config.headers.token = AUTH_TOKEN
  }
  return config
}, err => {
  return Promise.reject(err)
})

instance.interceptors.response.use(res => {
  if (AUTH_TOKEN) {
    localStorage.setItem('token', AUTH_TOKEN)
  }
  return res
}, err => {
  return Promise.reject(err)
})
export default instance
