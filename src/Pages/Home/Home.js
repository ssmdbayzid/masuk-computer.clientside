
// import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';

const Home = () => {
    // const [product, setProduct] = useState([])

    // useEffect(()=>{
    //     fetch('service.json')
    //     .then(res=>res.json())
    //     .then(data=> setProduct(data))
    // },[])
    return (
        <div>
            <Banner></Banner>
            <Product></Product>
        </div>
    );
};

export default Home;