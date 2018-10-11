import axios from 'axios'

// This is the one instance that everyone will use
const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getContacts() {
    return apiClient.get('/contacts')
  }
}
