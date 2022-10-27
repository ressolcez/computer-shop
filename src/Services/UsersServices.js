import axios from 'axios'


class UsersServices{

    getAllUsers(){
        return axios.get('http://localhost:8080/api/user')
    }
}

export default new UsersServices()