import React, {Component} from "react";
import './HomeLogin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
    //Funciones de carrusel 
    function IndividualIntervalsExample() {
      return (
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
        </div><Button variant="primary">Primary</Button></><Button variant="secondary">Secondary</Button></>        


        );
    }



export default IndividualIntervalsExample