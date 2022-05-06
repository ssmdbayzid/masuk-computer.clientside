import { useEffect, useState } from 'react';

const useHomeProduct = () => {
    const [products, setProducts] = useState()

    useEffect(()=>{
        const url = 'https://young-cove-45489.herokuapp.com/home'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return [products]
};

export default useHomeProduct;