// import React, { useState } from 'react';
import './Product.css'
const Product = ({product}) => {
    
    const { name, company, description, picture, price, stock_Quantity } = product;

    const id = product._id

    const handleRemoveProduct = () => {

        const proceed = window.confirm("Are you sure !!!")
        console.log('delete Items', id)

        if(proceed){
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
            })
        }      
    }

    


    return (
        <div>

            <table id="products">
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
                <tbody>
                <tr>
                    <td>{name}</td>
                    <td>
                    <img style={{width: '75px'}} src={picture} alt="" />
                    </td>
                    <td>{description}</td>
                    <td>${price}</td>
                    <td>{stock_Quantity}</td>
                    <td>{company}</td>
                    <td>
                    <button onClick={handleRemoveProduct} style={{backgroundColor: 'gold', padding: '2px 10px', borderRadius: '10px'}} >Remove</button>
                    </td>
                </tr>    
                </tbody>
            </table>
        </div>
    );
};

export default Product;