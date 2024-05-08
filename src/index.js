import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import SearchProvider from './component/context/searchProv';
import { CartProvider } from 'react-use-cart';
import { DarkModeProvider } from './component/context/darkModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
       
    <>
    <BrowserRouter>
   <DarkModeProvider>
   <SearchProvider>
    <CartProvider>
        <App/>
    </CartProvider>
    </SearchProvider>
   </DarkModeProvider>
    </BrowserRouter>
        
    </>
         
       
);


