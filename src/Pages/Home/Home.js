
// import { useEffect, useState } from 'react';
import useHomeProduct from '../../Hooks/useHomeProduct';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

const Home = () => {

    const [products] = useHomeProduct()
    // const [products, setProducts] = useState()

    // useEffect(()=>{
    //     fetch('https://young-cove-45489.herokuapp.com/home')
    //     .then(res=>res.json())
    //     .then(data=>setProducts(data))
    // },[])
    // console.log(products)
    console.log(products)

    return (
        <div>
            <Banner></Banner>
                <h1>My Total Product :</h1>
            <Footer></Footer>
        </div>
    );
};

export default Home;