import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../css/slider.css';

export default function MySlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className='imgs mb-5' activeIndex={index} onSelect={handleSelect} id='myslider' >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../Images/hero-1.jpg")}
          alt="First slide"
        />
        <Carousel.Caption className='text-right' style={{position:'absolute' ,right:'50%' , bottom :'15%' , textAlign:'left' ,display:'flex' , flexDirection:'column' ,gap:"30px" ,color:'black'}}>
          
          <h2 style={{fontSize:'40px',color:'white'} }>Everything you need in one place</h2>
         
          <button className='btn btn-light ' style={{width: 'fit-content ' , border:'none'}}> Shop Now </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../Images/hero-2.jpg")}
          alt="First slide"
        />
        <Carousel.Caption className='text-right' style={{position:'absolute' ,right:'50%' , bottom :'15%' , textAlign:'left' ,display:'flex' , flexDirection:'column' ,gap:"30px" ,color:'black'}}>
          
          <h2 style={{fontSize:'40px',color:'white'} }>Everything you need in one place</h2>
          <p className='text-white'>
         
          Welcome To
            Thewayshop
            See how your users experience your website in realtime or view
            trends to see any changes in performance over time.
          </p>
          <button className='btn btn-light ' style={{width: 'fit-content ' , border:'none'}}> Shop Now </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../Images/hero-3.jpg")}
          alt="First slide"
        />
        <Carousel.Caption className='text-right' style={{position:'absolute' ,right:'50%' , bottom :'15%' , textAlign:'left' ,display:'flex' , flexDirection:'column' ,gap:"30px" ,color:'black'}}>
         
          <h2 style={{fontSize:'35px'}}>Everything you need in one place</h2>
          <p>
          
            Welcome To
            Thewayshop
            See how your users experience your website in realtime or view
            trends to see any changes in performance over time.
          </p>
          <button className='btn btn-dark ' style={{width: 'fit-content'}}> Shop Now </button>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

