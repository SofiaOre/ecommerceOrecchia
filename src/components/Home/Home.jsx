import Galery from '../Galery/Galery';
import "./Home.css"
import { Link } from "react-router-dom";

const Home = ({ greetings }) => {

  return (
    <main>

      <Galery />



      <section id="cta" class="cta">
        <div>
          <div class="row" data-aos="zoom-out">
            <div class="container">
              <div class="row">
                <br />
                <div class="col text-center">
                  <h3>CONFÍAN EN NOSOTROS</h3>
                  <p>Algunos de nuestros clientes</p>
                  <br />
                </div>


              </div>
              <div class="row text-center">
                <div class="col">
                  <div class="counter">

                    <img src="ecommerceOrecchia/assets/hus.png" alt="" width="80%" />

                  </div>
                </div>
                <div class="col">
                  <div class="counter">
                    <img src="ecommerceOrecchia/assets/mc.png " alt="" width="80%" />

                  </div>
                </div>
                <div class="col">
                  <div class="counter">
                    <img src="ecommerceOrecchia/assets/spear.png" alt="" width="85%" class="py-3" />

                  </div></div>
                <div class="col">
                  <div class="counter">
                    <img src="ecommerceOrecchia/assets/stanley.png " alt="" width="85%" class="py-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>




      <div data-aos="zoom-out">
        <h2 class="py-3">QUIENES SOMOS</h2>

        <center>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <p class="paraHistory">
              Endor nacio en el año 2020, en plena pandemia.
              Somos un grupo de artesanas independientes que nos unimos para crear
              los mejores diseños de mates.
            </p>

            <p class="paraHistory">
              Acompañamos a nuestros clientes en su evolucion, a traves de la flexibilidad de nuestros medios de pago.
              Satisfaciendo a cada uno de ellos
              mediante diseños realmente innovadores.
            </p>

            <Link className="btn  btn-primary" to="/History" style={{ margin: "1rem" }}>CONOCENOS!</Link>
          </div>
        </center>
      </div>


    </main>
  )
}

export default Home;

