import axios from 'axios'

const baseURL = "http://localhost:8080/api/products";

class HomePageServices{

     getSliderContent(){
        return axios.get(baseURL+"/slider")
    }    

     getDiscountContent(){
        return axios.get(baseURL+"/slider")
    }    

     getMostOrderProducts(){
        return axios.get(baseURL+"/mostOrderProduct")
    }
    
     getRecommendedProducts(){
        return axios.get(baseURL+"/recommendedProduct")
    }
    
}

export default new HomePageServices()