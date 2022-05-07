
// import { useEffect, useState } from 'react';
// import useHomeProduct from '../../Hooks/useHomeProduct';
// import { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';

const Home = () => {
    // const [products] = useHomeProduct()
    // // const [products, setProducts] = useState()

    // // useEffect(()=>{
    // //     fetch('https://young-cove-45489.herokuapp.com/home')
    // //     .then(res=>res.json())
    // //     .then(data=>setProducts(data))
    // // },[])
    // // console.log(products)
    // console.log(products)

    return (
        <div>
            {/* <h1>{product.length}</h1> */}
            <Banner></Banner>
            <Products></Products>
            <Footer></Footer>
        </div>
    );
};

export default Home;