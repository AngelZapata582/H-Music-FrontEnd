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
        ];
      const reviews2 = [
        { _id: 1, text: "abc" },
        { _id: 2, text: "abc" },
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
                  <button  className="btn  btn-light btn-sm rounded-pill px-3" type="button">Cerrar sesion</button>
                </div>
            </div>
          </div>
        //carrusel
        <div class="row">
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
//carrusel 2
<div class="row">
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
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