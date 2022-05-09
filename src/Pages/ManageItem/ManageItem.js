import React, { useEffect, useState } from 'react';
// import useProduct from '../../Hooks/useProduct';
import './ManageItem.css'


const ManageItem = () => {
    const [products, setProducts] = useState()

    const handleRemoveProduct = (id) => {
        const proceed = window.confirm('Are You Sire');
        if(proceed){
            const url = `https://young-cove-45489.herokuapp.com/${id}`;

            fetch( url,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount > 0){
                    const remainingProduct = products.filter(product => product._id !== id);
                    setProducts(remainingProduct)
                }
            })
        }
    }

    useEffect(() => {
        fetch('https://young-cove-45489.herokuapp.com/product')
            .then(res => res.json())
            .then(data => {
            setProducts(data)
        })

    }, [])

    return (
        <div>
            <h5 className='bg-gray-600 text-3xl py-3 my-3 text-orange-600'>Manage Product Storization</h5>

            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Images</th>
                        <th>Short Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Supplier Name</th>
                        <th>Update</th>
                    </tr>
                </thead>

                {
                    products && products.map(product =>
                        <tbody key={product?._id}>
                            <tr>
                                <td>{product.name}</td>
                                <td>
                                    <img style={{ width: '75px' }} src={product.picture} alt="" />
                                </td>
                                <td>{product.description}</td>
                                <td>${product.price}</td>
                                <td>{product.stock_Quantity}</td>
                                <td>{product.company}</td>
                                <td>
                                    <button onClick={()=>handleRemoveProduct(product._id)} style={{ backgroundColor: 'gold', padding: '2px 10px', borderRadius: '10px' }} >Remove</button>
                                </td>
                            </tr>
                        </tbody>)
                }


            </table>


        </div >
    );
};

export default ManageItem;