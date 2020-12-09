import axios from 'axios'

const axiosInstance = (history = null) => {
  const baseURL = process.env.REACT_APP_BACKEND_URL
  let headers = {}

  console.log(baseURL)

  if (localStorage.token) {
    headers.Authorization = `Bearer ${localStorage.token}`
  }

  const axiosInstance = axios.create({
    baseURL: baseURL,
    headers,
  })

  axiosInstance.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) => {
        resolve(response)
      }),
    (error) => {
      if (!error.response) {
        new Promise((resolve, reject) => {
          reject(error)
        })
      }

      if (error.response.status === 403) {
        localStorage.removeItem('token')
        if (history) {
          history.push('/auth/login')
        }
        else {
          window.location = ('/auth/login')
        }
      }
      else {
        new Promise((resolve, reject) => {
          reject(error)
        })
      }
    }

  )
  return axiosInstance
}

export default axiosInstance
