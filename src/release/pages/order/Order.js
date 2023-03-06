import React, { useEffect, useState } from "react";
import OrderView from "./OrderView";
function Order(props){
    const [brands,setBrands] = useState([])
    const [productTypes,setProductsTypes] = useState([])
    useEffect(()=>(
        async function loadBrands(){
            const request = 'http://localhost:8063/api/Brand'
            const response = await fetch(request);
            const result = await response.json();
            console.log("brand ===",result)
            setBrands(result)
        }
        
    ),[])

    useEffect(()=>(
      
        async function loadProductTypes(){
            const request = 'http://localhost:8063/api/ProductTypes'
            const response = await fetch(request);
            const result = await response.json();
            console.log("producttype ===",result)
            setProductsTypes(result)
        }
        
    ),[])
    console.log("items === ",brands)
    console.log("producttype === ",productTypes)
    const {senddata}=props;
    console.log("add product === ",senddata);
    return(
        <OrderView
            brands = {brands}
            producttypes = {productTypes}
        />
    )
}
export default Order;