import axios from 'axios'

const baseURL = "http://localhost:8080/api/opinion/opinionsToProduct/";

class OpinionsService{
    
    getOpinionsToProduct(productId,pageNumber){
        return axios.get(baseURL +productId +"/"+pageNumber);
    } 

    getOpinionToProductRate(productId){
        return axios.get(baseURL +"rate/" + productId);
    } 

    addOpinionToProduct(opinion,productId,userId){
        return axios.post("http://localhost:8080/api/opinion/"+productId+"/"+userId,opinion);
    }
}

export default new OpinionsService()