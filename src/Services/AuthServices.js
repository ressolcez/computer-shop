import axios from 'axios'

const baseURL = "http://localhost:8080/api/user";

class AuthServices{
    
    registerUser(user)
    {
        return axios.post(baseURL, user)
    }

    isAuthorized(){
      return axios.get('http://localhost:8080/api/authentication', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        }
       })
    }

    loginUser(credential){
      return axios.post("http://localhost:8080/api/authentication",credential);
    }

    logoutUser(){
      let token = localStorage.getItem('token');
      return axios.post('http://localhost:8080/api/authentication/logout',token, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        }
      })
    }
}

export default new AuthServices()