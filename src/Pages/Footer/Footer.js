import React from 'react';
import socialLogo from '../images/social-logo.png'

const Footer = () => {
    return (
    
    <div style={{ position: 'absolute', bottom: 0, backgroundColor: 'rgba(39, 39, 40, 0.185)', borderTop: '1px solid black', width: '100%', marginTop:'50px', paddingTop: '15px', bottom: 0 }}>

            <div className='px-8 items-center flex' style={{ justifyContent: 'space-between', width: '100%', display: 'flex' }}>
                <div>
                    <p className='text-lg'>Masuk Computers & Solution Center</p>
                    <p className='text-sm'>CTG Road, Sidhirganj, Narayanganj.</p>
                </div>
                <div>
                    <p className='text-lg'>Contact Us</p>
                    <p className='text-sm'>+88 01717 946936</p>
                    <p className='text-sm'>+88 01516 151052</p>
                </div>
                <div>
                    <p className='text-lg'>Join With Us</p>
                    <img style={{height: '40px'}} src={socialLogo} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Footer;