import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://damp-basin-51825.herokuapp.com/'
})
