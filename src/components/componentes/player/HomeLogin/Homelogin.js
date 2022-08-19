import React, {Component} from "react";
import './HomeLogin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Stack, Carousel, Card, Button} from 'react-bootstrap';
import logo from '../../../img/logo.png';
import user from '../../../img/user.png';
import pop from '../../../img/pop.png';
import rock from '../../../img/rock.png';
import clasica from '../../../img/clasica.png';
import cumbia from '../../../img/cumbia.png';


    //Funciones de carrusel 
    function IndividualIntervalsExample() {
      


      const reviews = [
        { _id: 1, text: "abc" },
        { _id: 2, text: "def" },
        { _id: 3, text: "ghi" },
        { _id: 4, text: "jkl" },
        { _id: 5, text: "mno" },
        { _id: 6, text: "pqr" },
        { _id: 7, text: "stu" },
        { _id: 8, text: "vwx" },
        { _id: 9, text: "yza" }
      ];
      const reviews2 = [
        { _id: 1, text: "abc" },
        { _id: 2, text: "def" },
        { _id: 3, text: "ghi" },
        { _id: 4, text: "jkl" },
        { _id: 5, text: "mno" },
        { _id: 6, text: "pqr" },
        { _id: 7, text: "stu" },
        { _id: 8, text: "vwx" },
        { _id: 9, text: "yza" }
      ];
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
                  <button  className="btn  btn-light btn-sm rounded-pill px-3" type="button" >Cerrar sesion</button>
                </div>
            </div>
          </div>
        
        //carrusel 1
        <div>
      <div className="bg-dark bg-opacity-25 container-fluid">
        <Carousel style={{ height: 500 }}>
          {reviews.map((review, index) => (
            <Carousel.Item style={{ height: 500 }}>
              <Stack
                direction="horizontal"
                className="h-100 justify-content-center align-items-center"
                gap={9}
              >
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <img src={rock}></img>
                  </Card.Body>
                </Card>

                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <img src={pop}></img>
                  </Card.Body>
                </Card>

                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                  <img src={clasica}></img>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <img src={rock}></img>
                  </Card.Body>
                </Card>

                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <img src={pop}></img>
                  </Card.Body>
                </Card>

                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                  <img src={clasica}></img>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <img src={rock}></img>
                  </Card.Body>
                </Card>

                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <img src={pop}></img>
                  </Card.Body>
                </Card>

                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                  <img src={clasica}></img>
                    </Card.Body>
                </Card>
              </Stack>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
          //Cierre de carrusel 1
          //carrusel 2
        <div>
      <div className="bg-dark bg-opacity-25 container-fluid">
        <Carousel style={{ height: 500 }}>
          {reviews2.map((review, index) => (
            <Carousel.Item style={{ height: 500 }}>
              <Stack
                direction="horizontal"
                className="h-100 justify-content-center align-items-center"
                gap={9}
              >
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <img src={rock}></img>
                  </Card.Body>
                </Card>

                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <img src={pop}></img>
                  </Card.Body>
                </Card>

                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                  <img src={clasica}></img>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <img src={rock}></img>
                  </Card.Body>
                </Card>

                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <img src={pop}></img>
                  </Card.Body>
                </Card>

                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                  <img src={clasica}></img>
                    </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <img src={rock}></img>
                  </Card.Body>
                </Card>

                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <img src={pop}></img>
                  </Card.Body>
                </Card>

                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                  <img src={clasica}></img>
                    </Card.Body>
                </Card>
              </Stack>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
          //Cierre de carrusel 2
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