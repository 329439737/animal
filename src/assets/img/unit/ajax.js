import Axios from 'axios'

const instance = Axios.create({
  timeout: 1000
})

// 拦截器

instance.interceptors.request.use(() => {
  console.log('11')
}, () => {
  // 对请求错误做些什么
  console.log('2221')
})

// 响应器

instance.interceptors.response(() => {
  console.log('22222')
})

export default instance
