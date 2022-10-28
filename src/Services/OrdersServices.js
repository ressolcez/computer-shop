import axios from 'axios'


class OrdersServices{

    getAllOrders(){
        return axios.get("http://localhost:8080/api/orders")
    }

}

export default new OrdersServices()