import axios from 'axios'

const baseURL = "http://localhost:8080/api/products";

class TopBarServices{

    getAllProducts(){
        return axios.get(baseURL);
    }    
}

export default new TopBarServices()