import React, {Component} from "react";
import './HomeLogin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import logo from '../../../img/logo.png';
import user from '../../../img/user.png';
import pop from '../../../img/pop.png';
import rock from '../../../img/rock.png';
import clasica from '../../../img/clasica.png';
import cumbia from '../../../img/cumbia.png';

    //Funciones de carrusel 
    function IndividualIntervalsExample() {
      return (
        <div className="overflow bg-black">
          {/* Navbar User */}
          <div className="container-fluid">
                <div className="row bg-black p-3 text-white ">
                <div className="col text-start"><h5>H-Music</h5></div>
                <div className="col text-end"> 
                  <button  className="btn btn-primary btn-sm rounded-pill px-3 me-3" type="button">
                  <img src={user} alt="juanvazquez" className="g-0 pe-2 pb-1" width={25}></img>
                    Juanvazquez
                    </button>
                  <button  className="btn  btn-light btn-sm rounded-pill px-3" type="button">Cerrar sesion</button>
                </div>
            </div>
          </div>
        
        
          <><><div>
            <Carousel>
              <Carousel.Item interval={1000}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>

                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title 2</Card.Title>

                  </Card.Body>
                </Card>
              </Carousel.Item>
              <Carousel.Item>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Card Title 3</Card.Title>

                  </Card.Body>
                </Card>
              </Carousel.Item>
            </Carousel>

            
          </div>
          <Button variant="primary">Primary</Button></><Button variant="secondary">Secondary</Button>
          </>     

          <div className="container-fluid bg-black ">
            <div className="row p-5">
              <h3 className="text-start text-bold text-white">Categorias</h3>
            </div>

            <div className="row p-3 pb-4 justifiy-content-center">
                          <div className="col g-0">
                              <img src={rock} alt="Rock" className="img-fluid w-75"></img>
                          </div>
                          <div className="col g-0">
                              <img src={pop} alt="Pop" className="img-fluid w-75"></img>
                          </div>
              </div>

              <div className="row p-3 pb-3 justifiy-content-center">
                          <div className="col g-0">
                              <img src={clasica} alt="Clasica" className="img-fluid w-75 "></img>
                          </div>
                          <div className="col g-0">
                              <img src={cumbia} alt="Cumbia" className="img-fluid w-75 "></img>
                          </div>
              </div>
          </div>

          {/* Footer  */}
          <div className="container-fluid justifiy-content-center bg-black">
                <div className="row pt-5">
                    <div className="col-lg-5 col-md-4 col-sm-12">
                        <div className="line"></div>
                    </div>
                </div>

                <div className="row p-5 pb-5 justifiy-content-center">
                    <div className="col">
                        <img src={logo} alt="H-Music" className="img-fluid "></img>
                    </div>
                </div>
            </div>

        </div>
        );
    }



export default IndividualIntervalsExample