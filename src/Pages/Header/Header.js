
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import img from '../images/logo.png'
import './Header.css'
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)

    const handleSignOut = () =>{
        signOut(auth)
    }

    return (
        <div style={{justifyContent: 'space-between', position: 'static'}} className='w-full py-3 header flex items-center px-16'>
            <div style={{marginRight: '100px'}} className='flex items-center'>
                <img style={{height:'30px', width: '30px'}} src={img} alt='logo'/>
                <div className='mx-3'>
                <h5 className='text-base' style={{display: 'inline'}}>Masuk Computers & Solution Center</h5>
                <p className='text-xs'>A Complete IT Sales & Solutions Center</p>
                </div>
            </div>
            <nav className='text-lg'>
                    <Link to={'/home'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/blog'}>Blog</Link>
                    <Link to={'/#'}>Contact</Link>

                    { user && <Link to={'/manage-items'}>Manage Items</Link>}
                    {user && <Link to={'/add-items'}>Add Items</Link>}
                    {user && <Link to={'/my-items'}>My Items</Link>}
                    {
                        user? <button onClick={handleSignOut} className='py-2 px-3 bg-green-600 mx-3 rounded text-white'>Log Out</button>
                        : 
                        <Link to={'/log-in'}>Log In</Link> }

                    { user? '' : <Link to={'/sign-up'}>Register</Link>}    
                    
            </nav>
        </div>
    );
};

export default Header;