import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Cart2, CurrencyDollar, Plus, PlusSquare, StarFill } from 'react-bootstrap-icons';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
export default function Mycard({ thumbnail, title="product", price ,Items}) {
  const {addItem}= useCart();

  return (
    
    <Card className='col p-3  text-dark justify-content-center  bg-gradient gradient-bottom shadow-sm'   style={{ width: '18rem'}}>
      <Link to={`/productsDetailes/${Items.id}`}><Card.Img variant="top" src={thumbnail}
      style={{height:"15rem" , objectFit:"cover"}}/></Link>
      <Card.Body>
        <Card.Title> {title}</Card.Title>
        <Card.Title style={{fontSize:"13px", color:'#f7941d' }}> <StarFill/><StarFill/><StarFill/><StarFill/><StarFill/></Card.Title>
        <div className='d-flex justify-content-between'>
        <Card.Text className='fw-bold text-secondary'><CurrencyDollar/> {price} </Card.Text>
         <Button variant="white" className="btn-outline-secondary" onClick={ () => addItem(Items)}><Plus/></Button>
        </div>
     
      </Card.Body>
    </Card>
  );
}

