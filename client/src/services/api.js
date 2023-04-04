import Axios from 'axios'

export const BASE_URL = 'https://group-goal.herokuapp.com/api/'
// export const BASE_URL ='http://localhost:3001/'


const Client = Axios.create({ baseURL: BASE_URL })
console.log(baseURL)
console.log(Client)

Client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['authorization'] = `Bearer ${token}`
    }
    return config 
  },
  (error) => Promise.reject(error)
)


export default Client
