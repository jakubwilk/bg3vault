import { notifications } from '@mantine/notifications'
import axios, { AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: process.env['NEXT_PUBLIC_BASE_API_URL'],
  timeout: 24000,
})

api.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem('access_token')
    // config.headers.Authorization = `Bearer ${token}`

    // console.log('instance.interceptors.request.config', config)
    config.headers['Content-Type'] = 'application/json'

    return config
  },
  () => {
    // console.log('instance.interceptors.request.error', error)
  },
)

api.interceptors.response.use(
  (response) => {
    // console.log('instance.interceptors.response.response', response)
    return response
  },
  (error) => {
    console.log('instance.interceptors.response.error', error)
    if (error?.response) {
      if ([400, 402, 403, 404, 500].includes(error.response.data.statusCode)) {
        notifications.show({
          color: 'red',
          message: error.response?.data?.message,
        })
        return Promise.reject(error.response)
      }
    }
  },
)

export default api
