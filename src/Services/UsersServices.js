import axios from 'axios'


class UsersServices{

    getAllUsers(){
        return axios.get('http://localhost:8080/api/user')
    }

    addUser(user,roleId){
        return axios.post('http://localhost:8080/api/user/' + roleId,user)
    }

    updateUser(user,roleId,userId){
        return axios.put("http://localhost:8080/api/user/"+roleId + "/" + userId,user)
    }

    getUserById(userId){
        return axios.get("http://localhost:8080/api/user/"+userId);
    }
}

export default new UsersServices()