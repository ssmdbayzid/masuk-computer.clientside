import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const UpdateProduct = () => {

    const { id } = useParams()
    console.log(id)

    const [user, setUser] = useState({})

    const { name, company, description, picture, price, stock_Quantity } = user;
    console.log(user)

    // send data to server


    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    const handleDeliveryQty = e => {
        e.preventDefault()
        const updateQty = stock_Quantity - 1;
        console.log(updateQty)
    }

    const handleAddQty = e => {
        e.preventDefault()
        const addQty = parseInt(e.target.number.value)
        const updateQty = stock_Quantity + addQty;
        console.log(updateQty)
    }

    return (
        <div className='flex m-16'>
            <div style={{ width: '350px' }} className='border-gray-400 border-2 rounded'>
                <img className='img-fluid' src={picture} alt="" />
                <h1 className='font-bold text-2xl'>{name}</h1>
                <p>{description}</p>
                <h3 className='font-bold text-xl '>Price ${price}</h3>
                <p>Stock Quantity: {stock_Quantity}</p>
                <p>Supplier: <strong>{company}</strong></p>
                <button onClick={handleDeliveryQty} className='bg-blue-600 w-3/4 rounded-md m-2 py-1 text-white font-bold'>Delivery</button>
            </div>



            {/* <div className='p-3 m-3 border rounded'>
                    <img className='img-fluid' src={picture} alt="" />
                    <h1 className='font-bold text-2xl'>{name}</h1>
                    <p>{description}</p>
                    <h3 className='font-bold text-xl '>Price ${price}</h3>
                    <p>Stock Quantity: {stock_quantity}</p>
                    <p className='mb-2'>Supplier: <strong>{company}</strong></p>

                    <button onClick={handleDeliveryQty} className='bg-blue-600 w-full rounded-md py-1 px-12 mx-auto mt-2 text-white font-bold'>Update</button>
                </div> */}

            <div style={{ height: '200px' }} className='bg-green-900 w-fluid p-3 m-5'>
                <h1 className='text-white text-2xl'>Product Receive Quantity</h1>
                <form onSubmit={handleAddQty}>
                    <input className='text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="number" name='number' />
                    <br />
                    <button className='bg-blue-600 w-3/4 rounded-md m-2 py-1 text-white font-bold'>Add Quantity</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;