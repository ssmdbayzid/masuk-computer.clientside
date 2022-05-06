import React, { useEffect, useState } from 'react';



const MyItems = () => {
    const [products, setProducts] = useState();

    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <h2>This is my Total </h2>
            <h2>This is my Total</h2>
            {
                products.map(product=><li>{product.name}</li>)
            }
            
            
        </div>
    );
};

export default MyItems;