import React, { useEffect } from "react"
import Header from "./component/layout/Header/Header.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import WebFont from "webfontloader"
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js"
import ProductDetails from "./component/Products/ProductDetails.js"
import Products from "./component/Products/Products.js"
import Search from "./component/Products/Search.js"
import LoginSignUp from "./component/User/LoginSignUp.js";
import './App.css'
import store from "./store";
import { loadUser } from "../src/actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions.js"
import { useDispatch, useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import ProtectedRoute from "./component/Route/ProtectedRoute.js";
import UpdateProfile from "./component/User/UpdateProfile.js"

function App() {
  const { isAuthenticatedUser, user } = useSelector(state => state.user)
  // const dispatch = useDispatch();

  console.log(isAuthenticatedUser, "usyueyuqkswf", user)

  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "chilanka"],
      },
    })
    store.dispatch(loadUser())
  }, []);

  return (
    <Router>
      <Header />
      {isAuthenticatedUser && <UserOptions user={user} />}
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        {/* <Route  path="/products/:category" element={<Products/>} /> */}
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/login" element={<LoginSignUp />} />

        <Route element={<ProtectedRoute />} >
          <Route exact path="/account" element={<Profile />} />
        </Route>

        {isAuthenticatedUser && <Route element={<ProtectedRoute />} >
          <Route exact path="/me/update" element={<UpdateProfile />} />
        </Route>}



      </Routes>

      <Footer />
    </Router>



  );
}

export default App;
