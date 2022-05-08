
import { useEffect, useState } from 'react';
// import useHomeProduct from '../../Hooks/useHomeProduct';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';

const Home = () => {
    const [products, setProducts] = useState()

    useEffect(()=>{
        fetch('https://young-cove-45489.herokuapp.com/home')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div>
            <Banner></Banner>
        <div className='grid grid-cols-3 gap-8'>
        {
        products && products.map(product=> <Products
        product={product}
        key={product._id}></Products>)}
        </div>



            
            <Footer></Footer>
        </div>
    );
};

export default Home;