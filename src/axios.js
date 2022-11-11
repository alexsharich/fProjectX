import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:4444',
})

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token')
  return config
}) // проверка при ЛЮБОМ запросе существует ли в ЛС токен

export default instance