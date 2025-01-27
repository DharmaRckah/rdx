import axios from "axios";
export const fetchCategories = async()=>{
    try {
        const response = await axios.get("https://fakestoreapi.com/products/categories")
        const {data}=response;
        return data;
    } catch (error) {
        console.log(error)
        throw error;
    }
}