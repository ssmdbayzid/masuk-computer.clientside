import React from 'react';
import Product from '../Product/Product';

const ManageItem = () => {
    return (
        <div>
                <h5 className='bg-gray-600 text-3xl py-3 my-3 text-orange-600'>Manage Product Storization</h5>
                <Product></Product>
        </div>
    );
};

export default ManageItem;