
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Products = () => {

  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const res = await axios.get('https://fakestoreapi.com/products/category/jewelery');
      if (res.status === 200) {
        toast.success("Products fetched successfully");
      }
      setProducts(res?.data);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };  


  
  useEffect(() => {
   
    fetchProducts();
  }, []);
 
  return (
    <div className='container mx-auto px-4'>

      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6'>
        {products && products.map((product) => (
          <li key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={product.image} alt={product.title} className='w-full h-64 object-cover' />
            <div className='p-4'>
              <h2 className='text-xl font-semibold text-gray-800'>{product.title}</h2>
              <p className='text-gray-600 text-sm mt-2'>{product.description}</p>
              <p className='text-gray-800 font-semibold mt-3'>${product.price}</p>
            </div>
          </li>
        ))}
      </ul>

      <Toaster />
    </div>
  );
};

export default Products;
