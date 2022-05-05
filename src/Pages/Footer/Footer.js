import React from 'react';
import socialLogo from '../images/social-logo.png'

const Footer = () => {
    return (
        <div style={{ position: 'fixed', width: '100%', paddingTop: '15px', bottom: 0 }}>
            <hr style={{width: '100%'}} />
            <div className='px-8 items-center flex' style={{ justifyContent: 'space-between', width: '100%', display: 'flex' }}>
                <div>
                    <h5>Masuk Computers & Solution Center</h5>
                    <p className='text-xs'>CTG Road, Sidhirganj, Narayanganj.</p>
                </div>
                <div>
                    <h5>Contact Us</h5>
                    <p className='text-xs'>+88 01717 946936</p>
                    <p className='text-xs'>+88 01516 151052</p>
                </div>
                <div>
                    <p>Join With Us</p>
                    <img style={{height: '40px'}} src={socialLogo} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Footer;