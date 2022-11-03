import axios from 'axios'

const baseURLOrders = "http://localhost:8080/api/orders/";
const baseURLOrderProduct = "http://localhost:8080/api/orderProduct/"

class OrderServices{
    
    checkoutCart(items){
        return axios.post("http://localhost:8080/api/orderProduct/checkoutCart",items);
    }

    getCartInfo(items){
        return axios.post("http://localhost:8080/api/orderProduct/checkoutCart",items);
    }

    deleteOrder(orderId){
        return axios.delete("http://localhost:8080/api/orders" + orderId);
    }

    addOrder(userId,order,totalPrice){
        const newOrder = {totalPrice: totalPrice, address: order.address, houseNumber: order.houseNumber, postalCode: order.postalCode}
        console.log(newOrder)
        return axios.post(baseURLOrders+userId,newOrder)
    } 

    addOrderProduct(orderId,productId,quantity){
        return axios.post(baseURLOrderProduct+orderId+"/"+productId+"/"+quantity)
    }

    getUserOrders(userId){
        return axios.get(baseURLOrders + "userOrder/" + userId)
    }

    getOrderById(orderId){
        return axios.get("http://localhost:8080/api/orders/" + orderId);
    }

    changeOrderStatus(orderId,orderStatus){
        return axios.put('http://localhost:8080/api/orders/' + orderId,{},
        { params: { orderStatus: orderStatus
        } 
        })
    }

    
  
}

export default new OrderServices()