import axios from 'axios'

const baseURL = "http://localhost:8080/api/user";

class AuthServices{
    registerUser(user)
    {
        return axios.post(baseURL, user)
    }

}

export default new AuthServices()