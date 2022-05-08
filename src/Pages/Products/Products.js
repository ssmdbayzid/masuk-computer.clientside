import React from 'react';
import { useNavigate } from 'react-router-dom';

const Products = ({product}) => {
    const navigate = useNavigate()
    const handleNavButton = ()=>{
        navigate('/inventory/:id')
    }

    // 
    const {name,company, description, picture, price, stock_quantity } = product
    return (
        <div>
            <div className='p-3 m-3 border rounded'>
                <img className='img-fluid' src={picture} alt="" />
                <h1 className='font-bold text-2xl'>{name}</h1>
                <p>{description}</p>
                <h3 className='font-bold text-xl '>Price ${price}</h3>
                <p>Stock Quantity: {stock_quantity}</p>
                <p>Supplier: <strong>{company}</strong></p>

                <button onClick={handleNavButton} className='bg-blue-600 w-3/4 rounded-md py-1 text-white font-bold'>Update</button>
            </div>
        </div>
    );
};

export default Products;