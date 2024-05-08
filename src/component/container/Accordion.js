import Accordion from 'react-bootstrap/Accordion';
export default  function Accordions() {
  return (
    <Accordion defaultActiveKey={['0']}  style={{border:'none'}}>
      <Accordion.Item eventKey="0" style={{border:'none'}}>
        <Accordion.Header ><h6>Categories</h6></Accordion.Header>
        <Accordion.Body >
         <div>
            <ul style={{listStyle:'none',lineHeight:'3'}}>
            <li>Men (5)</li>
                <li>Women (5)</li>
                <li>Bags (5)</li>
                <li>Cloting (5)</li>
                <li>Shoes (5)</li>
                <li className='fw-bolder'>Accessories (20)</li>
                <li>Kides (20)</li>
                
             </ul>
         </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" style={{border:'none'}}>
        <Accordion.Header><h6>Branding</h6></Accordion.Header>
        <Accordion.Body>
        <div>
            <ul style={{listStyle:'none',lineHeight:'3'}}>
            <li>Louis Vuitton</li>
            <li>Chanal</li>
            <li>Herms</li>
            <li>Gussi</li>
            </ul>
         </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" style={{border:'none'}}>
        <Accordion.Header><h6>Filter Price</h6></Accordion.Header>
        <Accordion.Body>
      
            <ul style={{listStyle:'none',lineHeight:'3'}}>
            <li>$0 - $50</li>
            <li>$50 - $100</li>
            <li>$100 - $150</li>
            <li>$150 - $200</li>
            <li>$200 - $250</li>
            <li>$250 - $300</li>
            <li>+ $350</li>
           </ul>
    
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" style={{border:'none'}}>
        <Accordion.Header><h6>Filter Price</h6></Accordion.Header>
        <Accordion.Body>
      
            <ul style={{listStyle:'none',lineHeight:'3'}}>
            <li>Small</li>
            <li>Mediam</li>
            <li>X Small</li>
            <li>X Large</li>
            <li>2X Large</li>
            <li>3X Large</li>
            <li>4X Large</li>
           </ul>
    
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
