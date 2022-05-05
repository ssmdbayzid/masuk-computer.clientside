import React from 'react';
import img from '../images/google-login.png'

const LogIn = () => {
    return (
        <div className='bg-gray-200 mx-auto w-2/5 py-16 my-8'>
            <h1 className='text-orange-600 text-2xl'>Please Log In</h1>
            <form className='w-full'>
            <input className='text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="text" name='name' placeholder='your name' required/>
            <br />
            <input className='text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="password" name='password' placeholder='your password' required/>
            <br />
            <input style={{cursor: 'pointer'}} className='bg-orange-300 text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="submit" value='Log In'/>
            </form>
            <img style={{cursor: 'pointer'}} className='w-1/2 mx-auto mt-3 rounded-sm' src={img} alt="" />


        </div>
    );
};

export default LogIn;