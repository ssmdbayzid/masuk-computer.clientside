import './AddItems.css'
import { useForm } from "react-hook-form";

const AddItems = () => {
    
    // const { name, company, description, picture, price, stock_Quantity } = product;

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        console.log(data)
        
        const url = 'https://young-cove-45489.herokuapp.com/product'
        fetch(url, {
            method: 'POST',

            headers: {
                'content-type' : 'APPLICATION/JSON'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
        })
    };
      
    // const handleAddNewProduct = e => {

        
    //     e.preventDefault()
    //     //  const  email = e.target.product_name.value;
    //     //  const  imageURL = e.target.imageURL.value;
    //     //  const  description = e.target.description.value;
    //     //  const  price = e.target.price.value;
    //     //  const  quantity = e.target.quantity.value;
    //     //  const  supplier = e.target.supplier.value;

        
        
    //     const url = `https://young-cove-45489.herokuapp.com/inventory/${id}`;
    //         fetch(url, {
    //             method: 'PUT',
    //             headers: {
    //                 'content-type' : 'application/json'
    //             },
    //             body: JSON.stringify({updateQty})
    //         })
    //         .then(res=>res.json())
    //         .then(data=>{
    //             alert('Qty update successfully', data)
    //         })
            
            


    // }
    return (
        <div>
        <div className='bg-gray-200 mx-auto w-2/5 py-16 my-8'>
            <h1 className='text-orange-600 text-2xl'>Add New Product</h1>
            <br />
            <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                <input {...register("name", { required: true })} className='text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="text"placeholder='Product Name' autoComplete='off'/>
                <br />

                <input {...register("picture", { required: true })} className='text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="text" placeholder='Imge Url'/>
                <br />
                <input {...register("description", { required: true })} className='text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="text" placeholder='Description'/>
                <br />
                <input {...register("price", { required: true })} className='text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="number" placeholder='Price'/>
                <br />
                <input {...register("stock_quantity", { required: true })} className='text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="number" placeholder='Quantity'/>
                <br />
                <input {...register("company", { required: true })} className='text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="text" placeholder='Supplier Name'/>
                <br />

                <input className='cursor-pointer bg-orange-300 hover:bg-orange-400 text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="submit" value='Add Product' />
            </form>
        </div>
        </div>
    );
};

export default AddItems;