
import { Card, Col, Row } from "react-bootstrap";
import { useState} from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext";


const ItemDetail = ({ product, onAdd }) => {
  const [goCart, setGoCart] = useState(false);

  const {addToCart} = useCartContext();

  onAdd = (quantity) => {
    addToCart({...product, quantity: quantity});
    setGoCart(true);
  };
  return (
    <Card style={{ width: "90%", margin: "auto" , border:"1px solid #ac9376", }}>
<Row>

    <div  key={product.id}></div>    
  <Col xs={12} md={6}>
    
    <Card.Img     
      src={product.image}
      alt="Imagen detalle de producto"
      style={{ height: "35rem", objectFit: "contain" }}
  
    />
  </Col> 


  <Col xs={12} md={6} className="d-flex"   style={{ height: "35rem" , objectFit: "contain"}}>
  <Card.Body>
    
  <Card.Title style={{ fontSize: "2.2rem", color: "black" ,fontWeight:400 }}>{product.name}</Card.Title>
     
      <Card.Text class='ml-auto' style={{ fontSize: "2rem", color: "black" , fontWeight:"bold"}}>
        ${new Intl.NumberFormat().format(product.price)}
      </Card.Text>
      <Card.Text class="d-grid gap-2 col-8 mx-auto">{product.description}</Card.Text>
      <Card.Text style={{ fontSize: "1.4rem", color: "black" , fontWeight:"bold",  margin: "2rem"}}>DISPONIBILIDAD: {product.stock} DISPONIBLES
      
      </Card.Text>
   
    
      {goCart === false ? (
        <ItemCount  stock={product.stock} initial={1} onAdd={onAdd}  />
      ) : (

        
        <Link  className="btn  btn-primary"   to="/cart" style={{margin: "1rem"}}>Ir al carrito</Link>
      )}
    
   
      <Link  className="btn btn-primary" to="/all"  style={{margin: "1rem"}}>VOLVER A TIENDA</Link>    
    
    
      </Card.Body>
    </Col>
    </Row>
    </Card>
  );
};

export default ItemDetail;