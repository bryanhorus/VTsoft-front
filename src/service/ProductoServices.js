import axios from 'axios';

export default class ProductoService {

    url = "http://localhost:8084/api/vt/producto/";

    getAll() {
        return axios.get(this.url + "get/all");
    }

    save(producto) {
        return axios.post(this.url + "insert", producto)
    }
}