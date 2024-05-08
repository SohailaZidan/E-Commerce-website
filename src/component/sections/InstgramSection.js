import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
export default function InstgramSection() {
  return (
   <div className='p-5 mb-5 container '>
    
    <div className='row row-cols-2 d-block d-lg-flex d-xl-flex  align-items-center'>
      <div className='col col-lg-8 col-sm-12  '>
      <CardGroup>
      <Card>
        <Card.Img variant="top" src={require('../Images/instagram/instagram-1.jpg')}  style={{height:"15rem" , objectFit:"cover"}} />
      </Card>
      <Card>
        <Card.Img variant="top" src={require('../Images/instagram/instagram-2.jpg')} style={{height:"15rem" , objectFit:"cover"}} />
      </Card>
      <Card>
        <Card.Img variant="top"  src={require('../Images/instagram/instagram-3.jpg')} style={{height:"15rem" , objectFit:"cover"}} />
      </Card>
    </CardGroup>
    <CardGroup>
      <Card>
        <Card.Img variant="top"  src={require('../Images/instagram/instagram-4.jpg')}  style={{height:"15rem" , objectFit:"cover"}} />
      </Card>
      <Card>
        <Card.Img variant="top"  src={require('../Images/instagram/instagram-5.jpg')} style={{height:"15rem" , objectFit:"cover"}} />
      </Card>
      <Card>
        <Card.Img variant="top"  src={require('../Images/instagram/instagram-6.jpg')} style={{height:"15rem" , objectFit:"cover"}} />
      </Card>
    </CardGroup>
      </div>
    <div className='col  col-lg-4 d-none d-lg-block  ' >
            <h2 className='fw-bolder '>Instgram</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <h2 className='text-danger'>#Fashion</h2>
        </div>
   </div>
   </div>
  );
}

