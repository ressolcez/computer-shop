import axios from 'axios'

const baseURL = "http://localhost:8080/api/user";

class AuthServices{
    
    registerUser(user)
    {
        return axios.post(baseURL, user)
    }

    loginUser(login,password){
        
        return fetch('http://localhost:8080/api/authentication', 
        {
            method: 'POST',
            headers: 
                {
                    'Content-Type': 'application/json'},
                    body: JSON.stringify ({
                        login: login, password: password})
                    })
    }
}

export default new AuthServices()