import axios from 'axios'

// This is the one instance that everyone will use
const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjEiLCJuYmYiOjE1NDExMTU3MjEsImV4cCI6MTU0MTcyMDUyMSwiaWF0IjoxNTQxMTE1NzIxfQ.8BYw1fviHKX429AqxnKxiTrxCdru2B8Pzqvqgekk3SY'
  }
})

export default {
  getContacts() {
    return apiClient.get('/contacts')
  }
}
