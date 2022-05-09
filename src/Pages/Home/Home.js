
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import useHomeProduct from '../../Hooks/useHomeProduct';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import img from '../images/brand.jpg'

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

        <Link className='bg-green-400 hover:bg-green-600 py-3 px-8 m-16' to={'/manage-items'}>Manage Inventorie </Link>
        <br />
        <br />
            <hr />
        <div className='mx-auto'>
        <h1 className='text-3xl'>Our Brand</h1>
            <hr />
          <img style={{width : "500px", height: "300px", marginLeft : '400px', marginRight : '400px'}} src={img} alt="Brand"/>  
          </div>
        <div className='mx-auto'>
        <h1 className='text-3xl'>Our Service</h1>
            <hr />
            <h4 className='text-2xl'>We have a dedicated Team who are the expert engineer and ready to provide Best Computer, Laptop repair home and office service in Dhaka, Bangladesh.
            Our trained service providers are trained to handle all types of Desktop PC problems and issues and are able to deliver the right solution for your product.
            </h4>  
          </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;