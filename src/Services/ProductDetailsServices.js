import axios from 'axios'

const baseURL = "http://localhost:8080/api";

class ProductDetailsServices{

    getProductById(productId){
        return axios.get(baseURL+"/products/"+productId);
    }
    
}

export default new ProductDetailsServices()