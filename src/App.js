import React, { useEffect } from "react"
import Header from "./component/layout/Header/Header.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import WebFont from "webfontloader"
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js"
import ProductDetails from "./component/productDetails/ProductDetails.js"
import './App.css'

function App() {

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "chilanka"],
      },
    })
  }, []);

  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/product/:id" element={<ProductDetails/>} />
      </Routes>

      <Footer />
    </Router>



  );
}

export default App;
