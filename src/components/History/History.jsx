import React from 'react';
import "./History.css";
import { Card, Col, Row } from "react-bootstrap";

function History() {
  return <div> 
  <h1 class="py-5 ">QUIENES SOMOS</h1>   
   
 
<Row>

  <Col xs={12} md={6} >    
    <Card.Img     
      src="assets/equipo.jpg"
      alt="Imagen equipo"
      style={{ height: "35rem", objectFit: "contain", paddingLeft:"15px"}}  
    />
    
  </Col> 

  <Col xs={12} md={6} className="d-flex"   >
  <Card.Body>
    
  <Card.Title style={{ fontSize: "2.2rem", color: "black" ,fontWeight:400 }}>NOSOTRAS</Card.Title>
     
      <Card.Text class='ml-auto' style={{ fontSize: "17px", color: "black" }}>
      Somos un grupo de artesanas independientes que nos unimos para crear los mejores diseños
      de mates, por medio de nuestro trabajo. El mate es testigo de momentos unicos en la vida de 
      muchas personas.
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu magna augue.
       Aliquam in molestie nulla, sit amet ultrices nisi. Suspendisse gravida malesuada venenatis. 
       Nulla id nisl velit. Maecenas diam ante, finibus in vulputate sed, vestibulum a ligula. Aliquam 
       posuere eros vel blandit sagittis.
       Pellentesque non ipsum sit amet ante pellentesque ultricies. Cras tincidunt mauris eu orci tristique maximus.
       Cras tincidunt mauris eu orci.</p>
       <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu magna augue.
       Aliquam in molestie nulla, sit amet ultrices nisi. Suspendisse gravida malesuada venenatis. 
       Nulla id nisl velit. Maecenas diam ante, finibus in vulputate sed, vestibulum a ligula. Aliquam 
       posuere eros vel blandit sagittis.
       Pellentesque non ipsum sit amet ante pellentesque ultricies. Cras tincidunt mauris eu orci tristique maximus.       
       Cras tincidunt mauris eu orci Cras tincidunt mauris eu orci
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu magna augue.</p>
         
        <p> Aliquam in molestie nulla, sit amet ultrices nisi. Suspendisse gravida malesuada venenatis. 
       Nulla id nisl velit. Maecenas diam ante, finibus in vulputate sed, vestibulum a ligula. Aliquam 
       posuere eros vel blandit sagittis.
       Pellentesque non ipsum sit amet ante pellentesque ultricies. Cras tincidunt mauris eu orci tristique maximus.</p>
      </Card.Text>      
  
      </Card.Body>
    </Col>
    </Row>



</div>
  ;
}

export default History;
