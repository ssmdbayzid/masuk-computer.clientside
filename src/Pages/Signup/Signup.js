import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../images/google-signup.png'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';




const Signup = () => {
    const [createUserWithEmailAndPassword, user, error] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate()

    if(user){
        navigate('/home')
    }

    const handleCkeckbox = e =>{
        const checked =  e.target.checked;
        if(checked){
            navigate('/log-in')
        }
    }
    const handleSignUpform = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password) 
    }


    return (
         <div className='bg-gray-200 mx-auto w-2/5 py-16 my-8'>
            <h1 className='text-orange-600 text-2xl'>Please Register</h1>
            <br />
            <form onSubmit={handleSignUpform} className='w-full'>
                <input className='text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="text" name='name' placeholder='your name' autoComplete='off' required />
                <br />
                <input className='text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="text" name='email' placeholder='your email' autoComplete='off' required />
                <br />
                <input className='text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="password" name='password' placeholder='your password' required />
                <p>{error}</p>
                <br />
                <label className="flex items-center ml-14 m-2 w-3/4 px-3 text-red-700">
                    <input onClick={handleCkeckbox} type="checkbox" className="form-checkbox"/>
                        <span className="ml-2">Have An Account?</span>
                </label>
                <input className='cursor-pointer bg-orange-300 hover:bg-orange-400 text-lg py-1 m-2 w-3/4 px-3 rounded-sm' type="submit" value='Register' />
            </form>
            <img className='cursor-pointer w-1/2 mx-auto mt-3 rounded-sm' src={img} alt="" />
        </div>

    );
};

export default Signup;