import axios from 'axios'

class ProductServices{
    
    getProductsFromCart(items){
        return axios.post("http://localhost:8080/api/products/getProductsInCart",items)
    }

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

    getAllProducents(){
        return axios.get("http://localhost:8080/api/products/getAllProducents")
    }

}

export default new ProductServices()