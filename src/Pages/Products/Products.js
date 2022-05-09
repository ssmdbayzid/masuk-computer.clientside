import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({product}) => {

    const {name, company, description, picture, price, stock_Quantity, _id } = product;
    return (
        <div>
            <div className='p-3 m-3 border rounded'>
                <img className='img-fluid' src={picture} alt="" />
                <h1 className='font-bold text-2xl'>{name}</h1>
                <p>{description}</p>
                <h3 className='font-bold text-xl '>Price ${price}</h3>
                <p>Stock Quantity: {stock_Quantity}</p>
                <p className='mb-2'>Supplier: <strong>{company}</strong></p>        

                <Link to={`/inventory/${_id}`} 
                className='bg-blue-600 w-full rounded-md py-1 px-12 mx-auto mt-2 text-white font-bold'>Update</Link>
            </div>
        </div>
    );
};

export default Products;