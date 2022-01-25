import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'

const Item = (({ product }) => {

  return (

    <Card style={{ width: '18rem', marginBottom: 40, marginLeft: 20, border: " solid 3px #ac9376" }} key={product.id}>
      <div key={product.id}>
        <Card.Text className="addCart2">{product.category}</Card.Text>
        <Card.Img variant="top" src={product.image} alt="Imagen de producto" />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            $ {product.price}
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Link ><Link to={`/details/${product.id}`}><button className='btnVerMas' >VER MAS</button></Link></Card.Link>
        </Card.Body>

      </div>

    </Card>

  )
})

export default Item;



