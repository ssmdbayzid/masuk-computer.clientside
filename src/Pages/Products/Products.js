import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../../product.jpg'

const Products = () => {
    const navigate = useNavigate()
    const handleNavButton = ()=>{
        navigate('/inventory/:id')
    }
    return (
        <div className='grid grid-cols-3 '>
            <div className='p-3 m-3 border-gray-400 border-2 rounded'>
                <img className='img-fluid' src={img} alt="" />
                <h1 className='font-bold text-2xl'>Dell Laptop</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptatem magni inventore odio iste aliquam enim, dolores aspernatur.  </p>
                <h3 className='font-bold text-xl '>Price $100</h3>
                <p>Stock Quantity: 10</p>
                <p>Supplier: <strong>Shark Computers</strong></p>

                <button onClick={handleNavButton} className='bg-blue-600 w-3/4 rounded-md py-1 text-white font-bold'>Update</button>
            </div>
            <div className='p-3 m-3 border-gray-400 border-2 rounded'>
                <img className='img-fluid' src={img} alt="" />
                <h1 className='font-bold text-2xl'>Dell Laptop</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptatem magni inventore odio iste aliquam enim, dolores aspernatur.  </p>
                <h3 className='font-bold text-xl '>Price $100</h3>
                <p>Stock Quantity: 10</p>
                <p>Supplier: <strong>Shark Computers</strong></p>

                <button onClick={handleNavButton} className='bg-blue-600 w-3/4 rounded-md py-1 text-white font-bold'>Update</button>
            </div>
            <div className='p-3 m-3 border-gray-400 border-2 rounded'>
                <img className='img-fluid' src={img} alt="" />
                <h1 className='font-bold text-2xl'>Dell Laptop</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptatem magni inventore odio iste aliquam enim, dolores aspernatur.  </p>
                <h3 className='font-bold text-xl '>Price $100</h3>
                <p>Stock Quantity: 10</p>
                <p>Supplier: <strong>Shark Computers</strong></p>

                <button onClick={handleNavButton} className='bg-blue-600 w-3/4 rounded-md py-1 text-white font-bold'>Update</button>
            </div>
        </div>
    );
};

export default Products;