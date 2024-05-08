import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Chat, EyeFill, Heart} from 'react-bootstrap-icons';
export default function BlogSection() {
  return (
   <div className='p-5 mb-5'>
    <h2 className='text-center pb-3'>Popular Posts</h2>
    <div className=' container mx-auto   align-items-center'>

     <CardGroup className='gap-2'>
      <Card>
        <Card.Img variant="top" src={require('../Images/blog-1.jpg')}  style={{height:"20rem" , objectFit:"cover"}} />
        <Card.Body>
          <Card.Title>Fusce in augue non nisi fringilla</Card.Title>
          <Card.Text className='mb-5'>
          Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.
          </Card.Text>
        </Card.Body>
        <div className='d-flex bg-dark text-white p-3  gap-3'>
          <Heart/> <EyeFill/> <Chat/>
         </div>
      </Card>
      <Card>
        <Card.Img variant="top"src={require('../Images/blog-2.jpg')} style={{height:"20rem" , objectFit:"cover"}} />
        <Card.Body>
          <Card.Title>Fusce in augue non nisi fringilla</Card.Title>
          <Card.Text>
         Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.
          </Card.Text>
        </Card.Body>
        
        <div className='d-flex bg-dark text-white p-3  gap-3'>
          <Heart/> <EyeFill/> <Chat/>
         </div>
        
      </Card>
      <Card>
        <Card.Img variant="top" src={require('../Images/blog-3.jpg')} style={{height:"20rem" , objectFit:"cover"}} />
        <Card.Body>
          <Card.Title>Fusce in augue non nisi fringilla</Card.Title>
          <Card.Text>
         Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.
          </Card.Text>
        </Card.Body>
        <div className='d-flex bg-dark text-white p-3 gap-3'>
          <Heart/> <EyeFill/> <Chat/>
         </div>
      </Card>
    </CardGroup>
   </div>
   </div>
  );
}

