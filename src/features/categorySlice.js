
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCategories } from "../services/categoryService";

const initialState = {
    categories:[],
    loading:false,
    error:null
}