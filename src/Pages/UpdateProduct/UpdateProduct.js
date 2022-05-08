import React from 'react';
import img from '../../product.jpg'

const UpdateProduct = () => {
    const handleAddQty = e => {
        e.preventDefault()
        console.log(e.target.number.value)
    }
    return (
        <div className='flex m-16'>
              <div style={{width: '350px'}} className='border-gray-400 border-2 rounded'>
                <img className='img-fluid' src={img} alt="" />
                <h1 className='font-bold text-2xl'>hellow</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptatem magni inventore odio iste aliquam enim, dolores aspernatur.  </p>
                <h3 className='font-bold text-xl '>Price $100</h3>
                <p>Stock Quantity: 10</p>
                <p>Supplier: <strong>Shark Computers</strong></p>
                <button className='bg-blue-600 w-3/4 rounded-md m-2 py-1 text-white font-bold'>Update</button>
            </div>
            <div style={{height: '200px'}} className='bg-green-900 w-fluid p-3 m-5'>
                <h1 className='text-white text-2xl'>Product Receive Quantity</h1>
                <form onSubmit={handleAddQty}>
                <input className='text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="number" name='number'/>
                <br/>
                <button className='bg-blue-600 w-3/4 rounded-md m-2 py-1 text-white font-bold'>Add Quantity</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;