import React from 'react';
import { Link } from 'react-router-dom';
import img from '../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div style={{justifyContent: 'space-between'}} className='flex items-center px-3'>
            <div className='flex items-center'>
                <img style={{height:'30px', width: '30px'}} src={img} alt='logo'/>
                <div className='mx-3'>
                <h5 className='text-base' style={{display: 'inline'}}>Masuk Computers & Solution Center</h5>
                <p className='text-xs'>A Complete IT Sales & Solutions Center</p>
                </div>
            </div>
            <nav className='text-xs'>
                    <Link to={'/home'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/contact'}>Contact</Link>
                    <Link to={'/manage-items'}>Manage Items</Link>
                    <Link to={'/add-items'}>Add Items</Link>
                    <Link to={'/my-items'}>My Items</Link>
                    <Link to={'/log-in'}>Log In</Link>
            </nav>

        </div>
    );
};

export default Header;