import axios from "axios";
export const fetchProducts  = async()=>{
    try {
        const response = await axios.get("https://fakestoreapi.com/products")
         const {data } = response;
        return data;
    } catch (error) {
        console.log(error)
        throw error;
    }
}