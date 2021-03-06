import axios from 'axios'
const mainAxios = axios.create({
    baseURL: 'https://matteolecca-shop-online-server.herokuapp.com/',
    withCredentials : true,
    sameSite : 'none'
})

const productsAxios = axios.create({
    baseURL: 'https://fakestoreapi.com/',
})

//https://matteolecca-shop-online-server.herokuapp.com/
//http://192.168.1.146:8080/
export  {mainAxios, productsAxios }
