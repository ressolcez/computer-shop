import axios from 'axios'

class ProductServices{
    
    deleteProduct(productId){
        return axios.delete("http://localhost:8080/api/products/"+productId);
    }

    addProduct(categoryId,product){
        return axios.post("http://localhost:8080/api/products/"+categoryId,product)
    }

    editProduct(categoryId,productId,product){
        console.log(categoryId,productId,product)
        return axios.put("http://localhost:8080/api/products/"+productId + "/" + categoryId, product)
    }

    getAllProducts(){
        return axios.get('http://localhost:8080/api/products/')
    }

    findMostOrderdByProducents(){
        return axios.get('http://localhost:8080/api/products/mostOrderdByProducents')
    }

}

export default new ProductServices()