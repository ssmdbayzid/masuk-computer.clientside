import React from 'react';
import img from '../images/google-login.png'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
    const [signInWithEmailAndPassword, user, error] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user1, error1] = useSignInWithGoogle(auth);

    const navigate = useNavigate()

    if(user || user1){
        navigate('home')
    }
    const handleSignIn = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const pass = e.target.password.value;
        signInWithEmailAndPassword(email, pass)    
    }

    return (
        <div className='bg-gray-200 mx-auto w-2/5 py-16 my-8'>
            <h1 className='text-orange-600 text-2xl'>Please Log In</h1>
            <br />
            <form onSubmit={handleSignIn} className='w-full'>
                <input className='text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="email" name='email' placeholder='your name' autoComplete='off' required />
                <br />
                <input className='text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="password" name='password' placeholder='your password' required />
                <br />
                <label className="flex items-center ml-14 m-2 w-3/4 px-3 text-red-700">
                    <input type="checkbox" className="form-checkbox"/>
                        <span className="ml-2">Not Registered?</span>
                </label>
                <p>
                {error && error} {error1 && error1}
                </p>
                <input className='cursor-pointer bg-orange-300 hover:bg-orange-400 text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="submit" value='Log In' />
            </form>
            <img onClick={()=> signInWithGoogle()} className='cursor-pointer w-1/2 mx-auto mt-3 rounded-sm' src={img} alt="" />
        </div>
    );
};

export default LogIn;