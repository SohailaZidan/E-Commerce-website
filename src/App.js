import MyNavbar from "./component/container/navbar";
import { Routes ,Route } from "react-router-dom";
import { DarkModeContext } from "./component/context/darkModeContext";
//Pages
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ShopPage from "./pages/ShopPage";
import UsersPage from "./pages/UsersPage";
import FormPage from "./pages/FormPage";
import CartPage from "./pages/AddToCartPage";
import { useContext } from "react";
import Footer from "./component/container/Footer";

export default function App(){
  const {dark} =useContext(DarkModeContext);
    return(
        <>
      <div className={dark? 'bg-dark text-white ':''} >
      <MyNavbar/>
      <Routes>
      <Route path='/' exact Component={HomePage}/>
        <Route path='/home'  Component={HomePage} />
        <Route path='/products' Component={ShopPage}/>
        <Route path='/productsDetailes/:id'  Component={ProductDetailsPage}/>
        <Route path='/user'  Component={UsersPage}/>
        <Route path='/login'  Component={FormPage}/>
        <Route path='/cart'  Component={CartPage}/>
     
      </Routes>
      <Footer/>
      </div>
        </>
    )
}