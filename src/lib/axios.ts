import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3000',
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.error(error)
    alert(
      'Modo desenvolvimento: verifique se a api com json server está rodando!',
    )
    return Promise.reject(error)
  },
)
