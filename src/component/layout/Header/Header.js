import React from 'react';
import {ReactNavbar} from "overlay-navbar"
// import logo from "./../../../image/elogo.png"


const Header = () => {
    return (
      
            <ReactNavbar
            burgerColorHover="#eb4034"
            // logo = {logo}
            logoWidth = "20vmax"
            navColor1 = "#fff"
            link1Text="Home"
            link2Text="Product"
            link3Text="Contact"
            link4Text="About"
            link1Url = "/"
            link2Url = "/product"
            link3Url = "/contact"
            link4Url = "/about"
            linkSize = "1.3vmax"
            link1Color = "rgba(35, 35,35, 0.8)"
            nav1justifyContent="flex-end"
            nav2justifyContent="flex-end"
            nav3justifyContent="flex-start"
            nav4justifyContent="flex-start"
            link1ColorHover = "#eb4034"
            link1Margin= "0"
            link2Margin= "1vmax"
            link3Margin= "1vmax"
            link4Margin= "1vmax"
            profileIconColor = "rgba(35, 35,35, 0.8)"
            searchIconColor = "rgba(35, 35,35, 0.8)"
            cartIconColor = "rgba(35, 35,35, 0.8)"
            cartIconColorHover = "#eb4034"
            profileIconColorHover = "#eb4034"
            searchIconColorHover = "#eb4034"
            cartIconMargin = "1vmax"
            
            />
      
    );
};

export default Header;