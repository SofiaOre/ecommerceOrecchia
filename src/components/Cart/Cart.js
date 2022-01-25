import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css"
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

const Cart = () => {
  const { cartList, removeFromCart, deleteFromCart, totalCart } =
    useCartContext();
  return (

    <div>
      <h1 class="py-5">CARRITO</h1>
      {cartList < 1 ? (

        <div className="carritoVacio">
          <h2>Tu carrito esta vacio</h2>
          <Link to="/all">
            <Button className="botonContador">Volver a la tienda</Button>
          </Link>

        </div>
      ) :

        <>
          <center>
            <div class="row d-flex justify-content-center px-5">

              <div class="text-center">
                <Table style={{ border: "solid 1px " }} class="col-md-10">

                  <thead>

                    <tr class="bg-light tituloTabla" >

                      <th class="col-1" ></th>
                      <th class="col-2" > <h5><b>PRODUCTO</b></h5></th>
                      <th class="col-1" > <h5><b>PRECIO</b></h5></th>
                      <th class="col-1" > <h5><b>CANTIDAD</b></h5></th>
                      <th class="col-1" > <h5><b>SUBTOTAL</b></h5></th>
                      <th class="col-1"></th>
                    </tr>
                  </thead>


                  <tbody>

                    {cartList.map((product) => (

                      <tr>


                        <td key={product.id}>
                          <img src={product.image} alt={product.name}
                            width="80px"
                            height="80px"
                          />
                        </td>

                        <td
                        >{product.name}</td>
                        <td
                        >{product.price}</td>
                        <td
                        >{product.quantity}</td>
                        <td
                        >{product.quantity * product.price}</td>
                        <td class="">
                          <p onClick={() => deleteFromCart(product)} className="botonEliminar" >
                            <i class="far fa-trash-alt size:2x"></i>
                          </p>
                        </td>

                      </tr>

                    ))}

                  </tbody>
                </Table>
              </div>
            </div>
          </center>

          <div className="precioTotal">

            <h4 class="font-weight-bold">TOTAL CARRITO: ${totalCart()}</h4>
          </div>
          <div className="botonesCompra">
            <Button className=" btn btn-outline-primary botonVaciarCarrito" onClick={removeFromCart}>Vaciar carrito</Button>
            <Link to="/all">
              <Button className="btn btn-outline-primary botonSeguirComprando">Seguir comprando</Button>
            </Link>
            <div className="mr-auto">

              <Link to="/Checkout" >

                <Button className="btn btn-outline-success  botonSeguirComprando2" >TERMINAR COMPRA </Button>
              </Link></div>

          </div>

        </>

      }
    </div>

  )
}

export default Cart