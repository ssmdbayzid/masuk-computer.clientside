import { useEffect, useState } from 'react';


const useProduct = () => {
    const [products, setProducts] = useState({})
    // const [product, setProduct] = useState({})

    useEffect(() => {
        const url = 'https://young-cove-45489.herokuapp.com/product';
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    

    console.log(products)

    return ([products]);
};

export default useProduct;