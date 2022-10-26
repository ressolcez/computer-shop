import axios from 'axios'

class ProductServices{
    
    deleteProduct(productId){
        return axios.delete("http://localhost:8080/api/products/"+productId);
    }

}

export default new ProductServices()