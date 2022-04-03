import React from 'react';
// import image1 from '../../../image/elogo.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer id="footer">
            <div className='leftFooter'>
                <h4>Download Our App</h4>
                <p>Download Our Android And iphone app</p>
                {/* <img src={image1} alt="android" />
                <img src={image1} alt="iphone pic" /> */}
            </div>
            <div className='midFooter'>
                <h1>Ecommerce</h1>
                <p>High Quality is our first priority</p>
                <p>Copyrights 2022 from &copy; Safawat </p>
            </div>
            <div className='rightFooter'>
                <h4>Follow Us </h4>
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">Youtube </a>
            </div>
        </footer>
    );
};

export default Footer;