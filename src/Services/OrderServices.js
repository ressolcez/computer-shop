import axios from 'axios'

const baseURLOrders = "http://localhost:8080/api/orders/";
const baseURLOrderProduct = "http://localhost:8080/api/orderProduct/"

class OrderServices{
    
    addOrder(userId,totalPrice){
        return axios.post(baseURLOrders+userId,{},
        { params: 
            { totalPrice: totalPrice} 
        })
    } 

    addOrderProduct(orderId,productId,quantity){
    return axios.post(baseURLOrderProduct+orderId+"/"+productId+"/"+quantity)
    }
  
}

export default new OrderServices()