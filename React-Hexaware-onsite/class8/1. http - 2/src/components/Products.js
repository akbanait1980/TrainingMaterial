import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    // const response = await axios.get("https://fakestoreapi.com/products")
    //     .catch(error => console.log(errro))

    try{
        const response = await axios.get("https://fakestoreapi.com/products")
        setProducts(response.data)
    }catch(error){
        console.log(error)
    }  
  };

  return (
    <div>
      <h1 className="text-center">All Products</h1>
      <div class="row">
        {products.map((item) => (
          <Product data={item} />
        ))}
      </div>
    </div>
  );
};
export default Products;
