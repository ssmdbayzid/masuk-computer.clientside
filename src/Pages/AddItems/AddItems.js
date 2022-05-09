import './AddItems.css'
const AddItems = () => {
    
    // const { name, company, description, picture, price, stock_Quantity } = product;

    const handleAddNewProduct = e => {
        e.preventDefault()
        console.log('email', e.target.product_name.value);
        console.log('imageURL', e.target.imageURL.value);
        console.log('description', e.target.description.value);
        console.log('price', e.target.price.value);
        console.log('quantity', e.target.quantity.value);
        console.log('supplier', e.target.supplier.value);
        
        // const url = `https://young-cove-45489.herokuapp.com/inventory/${id}`;
        //     fetch(url, {
        //         method: 'PUT',
        //         headers: {
        //             'content-type' : 'application/json'
        //         },
        //         body: JSON.stringify({updateQty})
        //     })
        //     .then(res=>res.json())
        //     .then(data=>{
        //         alert('Qty update successfully', data)
        //     })     
    }
    return (
        <div className='bg-gray-200 mx-auto w-2/5 py-16 my-8'>
            <h1 className='text-orange-600 text-2xl'>Add New Product</h1>
            <br />
            <form onSubmit={handleAddNewProduct} className='w-full'>
                <input className='text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="text" name='product_name' placeholder='Product Name' autoComplete='off' required />
                <br />

                <input className='text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="text" name='imageURL' placeholder='Imge Url' required />
                <br />
                <input className='text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="text" name='description' placeholder='Description' required />
                <br />
                <input className='text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="number" name='price' placeholder='Price' required />
                <br />
                <input className='text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="number" name='quantity' placeholder='Quantity' required />
                <br />
                <input className='text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="text" name='supplier' placeholder='Supplier Name' required />
                <br />

                <input className='cursor-pointer bg-orange-300 hover:bg-orange-400 text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="submit" value='Add Product' />
            </form>
        </div>
    );
};

export default AddItems;