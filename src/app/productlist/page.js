"use client"
import { useEffect, useState } from "react";
function page() {
    const [product,setProduct]=useState([]);
    useEffect(() => {
        const fetchData = async () => {
            let data = await fetch("https://dummyjson.com/products");
            data = await data.json();
            console.log(data);
            setProduct(data.products)
        };

        fetchData();
    }, []);
  return (
    <>
    <h1>product list</h1>
    {
        product.map((item)=>(
            <>
            <h3>name: {item.title}, price: {item.price}</h3>
            <h4 >about: {item.description}</h4>
            <br />
            <br />
            </>
        ))
    }
    </>
  );
}

export default page;