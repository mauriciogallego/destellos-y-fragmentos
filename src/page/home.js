import React, { Component } from 'react';
import './home.css';
import { Carousel } from 'react-bootstrap'
import foto1 from "../assets/imagen/foto1.png";
import foto2 from "../assets/imagen/foto2.png";
import foto3 from "../assets/imagen/foto3.png";
import foto4 from "../assets/imagen/foto4.png";

import Image from 'react-bootstrap/Image'

class Home extends Component {
    render() {
        return (
            <div className="positbox">
           <div className="boxgeneral home alert alert-secondary">   
           
                <Carousel>
                    <Carousel.Item>
                        
                            <Image
                                className="propimagen d-inline-block "
                                src={foto1}
                                alt="First slide"
                            />
                            <Image

                                className="propimagen d-inline-block "
                                src={foto2}
                                alt="dos"
                            />
                            <Image

                                className="propimagen d-inline-block "
                                src={foto3}
                                alt="tres"
                            />
                            <Image

                                className="propimagen d-inline-block "
                                src={foto4}
                                alt="cuatro"
                            />
                        

                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="propimagen d-inline-block w-20"
                            src={foto2}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className=" propimagen d-block w-20"
                            src={foto3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className=" propimagen d-block w-20"
                            src={foto4}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            </div>
            
        )
    }

}


export default Home