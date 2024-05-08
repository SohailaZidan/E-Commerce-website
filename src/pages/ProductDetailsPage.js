import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
export default function ProductDetailsPage(){
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      console.log(data);
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  } else {
    return (
     <>
 
      <div className='container d-flex m-5 mx-auto p-5 justify-content-center align-items-center gap-5' >
        
        <Card style={{width:'18rem'}} >
          <Card.Img variant="top" src={product.thumbnail}  style={{height:"15rem" , objectFit:"cover"}} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
            {product.description}
            </Card.Text>
            <Card.Text >Brand :
            {product.brand}
            </Card.Text>
            <Card.Text >Price : $
            {product.price}
            </Card.Text>
            <button className='btn btn-secondary' >Buy Now</button>
            </Card.Body>
          
  
        </Card>
       <div></div>
        </div>
     </>
      
    );
  }
};

