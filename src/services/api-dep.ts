import { notifications } from '@mantine/notifications'
import axios, { AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: process.env['BASE_API_URL'] || '',
  timeout: 360000,
})

api.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem('access_token')
    // config.headers.Authorization = `Bearer ${token}`

    // console.log('instance.interceptors.request.config', config)
    return config
  },
  () => {},
)

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error?.response) {
      if (error.response.status === 404) {
        notifications.show({
          color: 'red',
          title: '404 Code',
          classNames: { root: 'rounded-none', icon: 'rounded-none' },
          message:
            'An attempt was made to send a query to a resource that does not exist. Contact the service administrator',
        })
        return Promise.reject(error.response)
      }
      if ([400, 402, 403].includes(error.response.status)) {
        notifications.show({
          color: 'red',
          message: error.response?.data,
          classNames: { root: 'rounded-none', icon: 'rounded-none' },
        })
        return Promise.reject(error.response)
      }
      if (error.response.status === 500) {
        notifications.show({
          color: 'red',
          message: error.response?.data,
          classNames: { root: 'rounded-none', icon: 'rounded-none' },
        })
        return Promise.reject(error.response)
      }
    }
  },
)

export default api
