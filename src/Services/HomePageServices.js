import axios from 'axios'

const baseURL = "http://localhost:8080/api/products";

class HomePageServices{

    getSliderContent(){
        return axios.get(baseURL+"/slider")
    }    
}

export default new HomePageServices()