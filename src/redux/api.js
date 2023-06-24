import axios from 'axios'
export const URL = "http://localhost:5000/api"
// export const URL = "https://wild-jade-armadillo-slip.cyclic.app/api"

const api = axios.create({
    baseURL:URL
})

export default api 