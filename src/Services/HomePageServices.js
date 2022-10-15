import axios from 'axios'

const baseURL = "http://localhost:8080/api/products";

class HomePageServices{

    getSliderContent(){
        return axios.get(baseURL+"/slider")
    }    

    getDiscountContent(){
        return axios.get(baseURL+"/discount")
    }    

    getMostOrderProducts(){
        return axios.get(baseURL+"/mostOrderProduct")
    }
    
    getRecommendedProducts(){
        console.log("wysylam")
        return axios.get(baseURL+"/recommendedProduct")
    }
    
    getOpinionsToProduct(productId){
        return axios.get("http://localhost:8080/api/opinion/opinionsToProduct/"+productId)
    }

    
    
}

export default new HomePageServices()