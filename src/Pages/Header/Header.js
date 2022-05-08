// import { Button } from 'bootstrap';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';

import img from '../images/logo.png'
import './Header.css'

const Header = () => {
    const [user] = useAuthState()

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
                    <Link to={'/contact'}>Contact</Link>

                    <Link to={'/manage-items'}>Manage Items</Link>
                    <Link to={'/add-items'}>Add Items</Link>
                    <Link to={'/my-items'}>My Items</Link>
                    { user && <button>Log Out</button>}
                    
                    <Link to={'/sign-up'}>Register</Link>
            </nav>
        </div>
    );
};

export default Header;