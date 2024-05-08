import { Chat, Envelope, Facebook, Google, Instagram, Twitter } from "react-bootstrap-icons";

export default function Footer() {
    return (
      <footer className="bg-dark  relative-bottom w-100  text-light p-5"  >
      
      <div className="row container-fluid ">
        <div className="col col-lg-4 col-sm-12">
            <h3>Fashion</h3>
            <p>The customer is at the heart of our unique business model</p>
            <div className="d-flex gap-2"><Facebook/> <Twitter/> <Instagram/><Chat/> <Google/></div>
        </div>
        <div className="col col-lg-4 col-sm-12">
            <h5>Shopping</h5>
            <p>Cloting Store</p>
            <p>Trending Shoes</p>
            <p>Accessories</p>
            <p>Sales</p>
        </div>
        <div className="col col-lg-4 col-sm-12">
        <h5>Shopping</h5>
            <p>Cloting Store</p>
            <p>Trending Shoes</p>
            <p>Accessories</p>
            <p>Sales</p>
        </div>
         <hr/>
     <p className="text-center">Copyright © 2023 All rights reserved | This design is made with  by Colorlib</p>
      </div>
      </footer>
    );
  }