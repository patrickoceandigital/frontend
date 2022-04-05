import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;
const API_URL_WINDOWS = window.REACT_APP_API_URL;
console.log("Mon url est  = " + API_URL_WINDOWS);


const CUSTOMER_API_BASE_URL = API_URL_WINDOWS+'/api/version_1/customers';
class CustomerService {

    getAllCustomers() {
        return axios.get(CUSTOMER_API_BASE_URL);
    }

    createCustomer(customer) {
        return axios.post(CUSTOMER_API_BASE_URL, customer);
    }

    getCustomerById(id) {
        return axios.get(CUSTOMER_API_BASE_URL + '/' + id);
    }

    updateCustomer(customer, id) {
        return axios.put(CUSTOMER_API_BASE_URL + '/' + id, customer);
    }

    deleteCustomer(id) {
        return axios.delete(CUSTOMER_API_BASE_URL + '/' + id);
    }

}

export default new CustomerService();
