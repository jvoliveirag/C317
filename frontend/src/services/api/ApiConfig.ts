import axios from 'axios'

export const Api = () => {
  return axios.create({
    baseURL: 'https://bj7r4fxsja.execute-api.us-east-1.amazonaws.com',
  })
}
