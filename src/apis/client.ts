import request from 'axios'

const client = request.create({
  baseURL: import.meta.env.VITE_APP_BE_API,
})

export default client
