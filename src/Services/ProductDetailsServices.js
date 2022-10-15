import axios from 'axios'

const baseURL = "http://localhost:8080/api";

class ProductDetailsServices{

    getProductById(productId){
        console.log(productId)
        return axios.get(baseURL+"/products/"+productId)
    }
    
    getOpinionsToProduct(productId){
        return axios.get(baseURL + "/opinion/opinionsToProduct/"+productId)
    } 
}

export default new ProductDetailsServices()