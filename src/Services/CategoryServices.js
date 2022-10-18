import axios from 'axios'

class CategoryServices{

    getFilters(categoriesFilter){

        let categoriesFilterString = categoriesFilter.toString();
        return axios.get('http://localhost:8080/api/products/filters', { params: { categories: categoriesFilterString } })
    }   
    

}

export default new CategoryServices()