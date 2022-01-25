
import { Carousel } from "react-bootstrap";
import React, { Component } from 'react'
import Logo from '../../assets/logo.svg';

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
                                alt="bannerText1"
                                src=" assets/slide1.jpg "
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="contenedor">
                            <img
                                className="banerSlide"
                                alt="bannerText1"
                                src=" assets/slide2.jpg "
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="contenedor">
                            <img
                                className="banerSlide"
                                alt="bannerText1"
                                src=" assets/slide3.jpg "
                            />
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>


        )
    }
}
export default Banner;