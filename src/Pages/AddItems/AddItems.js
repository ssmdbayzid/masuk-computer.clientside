import './AddItems.css'
const AddItems = () => {
    
    // const { name, company, description, picture, price, stock_Quantity } = product;


    return (
        <div className='bg-gray-200 mx-auto w-2/5 py-16 my-8'>
            <h1 className='text-orange-600 text-2xl'>Add New Product</h1>
            <br />
            <form className='w-full'>
                <input className='text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="email" name='email' placeholder='Product Name' autoComplete='off' required />
                <br />

                <input className='text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="text" name='text' placeholder='Imge Url' required />
                <br />
                <input className='text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="text" name='text' placeholder='Description' required />
                <br />
                <input className='text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="text" name='text' placeholder='Price' required />
                <br />
                <input className='text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="text" name='text' placeholder='Quantity' required />
                <br />
                <input className='text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="text" name='text' placeholder='Supplier Name' required />
                <br />

                <input className='cursor-pointer bg-orange-300 hover:bg-orange-400 text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="submit" value='Log In' />
            </form>
        </div>
    );
};

export default AddItems;