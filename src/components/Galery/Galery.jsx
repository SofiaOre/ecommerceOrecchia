import { Carousel } from "react-bootstrap";
import React, { Component } from 'react'
import Logo from '../../assets/logo.svg';
import slide1 from  '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';

const estilos = { fontSize: '1.8rem', backgroundColor: '#ac9376', color: 'white', fontFamily: 'Raleway, sans-serif', fontWeight: 600, padding: 50, marginBottom: 0, }
class Banner extends Component {

    render() {
        return (


            <div>

                <p style={estilos}>
                    DISFRUTA LA VIDA, DISFRUTA DE LOS MEJORES MATES!
                    <img src={Logo} alt="" className="App-logo2" />    </p>

                <Carousel pauseOnHover={false}>
                    <Carousel.Item>
                        <div className="contenedor">
                            <img
                                className="banerSlide"
                                alt="banner1"
                                src={slide1}
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="contenedor">
                            <img
                                className="banerSlide"
                                alt="banner2"
                                src={slide2}
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="contenedor">
                            <img
                                className="banerSlide"
                                alt="banner3"
                                src={slide3}
                            />
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>


        )
    }
}
export default Banner;
