import React, {Component} from "react";
import './HomeLogin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../../img/logo.png';
import user from '../../../img/user.png';
import pop from '../../../img/pop.png';
import rock from '../../../img/rock.png';
import clasica from '../../../img/clasica.png';
import cumbia from '../../../img/cumbia.png';
import Rock1 from '../../../img/Rock1.png';
import Pop1 from '../../../img/Pop1.png';
import Pop2 from '../../../img/Pop2.png';
import Pop4 from '../../../img/Pop4.png';
import Clasic1 from '../../../img/Clasic1.png';
import Clasic2 from '../../../img/Clasic2.png';
import Clasic3 from '../../../img/Clasic3.png';
import Clasic4 from '../../../img/Clasic4.png';
import Cumbia1 from '../../../img/Cumbia1.png';
import Cumbia2 from '../../../img/Cumbia2.png';
import Cumbia3 from '../../../img/Cumbia3.png';
import Cumbia4 from '../../../img/Cumbia4.png';

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
        


        <div className="Text1">
        <h5>Encuentra lo mejor del genero:</h5>
        </div>
        <div className="Text11">
        <h4>POP</h4>
        </div>
        <div className="Card1">
        <div class="row">
  <div class="col-sm-3">
      <img src={Rock1} class="img-fluid rounded-start"></img>
      <h4 className="art1">Manu</h4>
  </div>
  <div class="col-sm-3">
      <img src={Pop1} height="322px" width="210px"></img>
      <h4 className="art2">HAASH</h4>
  </div>
  <div class="col-sm-3">
      <img src={Pop2} height="322px" width="210px"></img>
      <h4 className="art3">Morat</h4>
    
  </div>
  <div class="col-sm-3">
      <img src={Pop4} height="324px" width="210px"></img>
      <h5 className="art4">Manu Medrano</h5>
  </div>
  </div>
</div>

<div className="Text2">
        <h5>Encuentra lo mejor del genero:</h5>
        </div>
        <div className="Text22">
        <h4>Clasica</h4>
        </div>
<div className="Card2">
        <div class="row">
  <div class="col-sm-3">
      <img src={Clasic1} height="322px" width="210px"></img>
      <h5 className="art5">Jose Jose</h5>
      </div>
  <div class="col-sm-3">
      <img src={Clasic2} height="322px" width="210px"></img>
      <h5 className="art6">Juan Gabriel</h5>
  </div>
  <div class="col-sm-3">
      <img src={Clasic3} height="322px" width="210px"></img>
      <h5 className="art7">Amanda Miguel</h5>
  </div>
  <div class="col-sm-3">
      <img src={Clasic4} height="322px" width="210px"></img>
      <h5 className="art8">Wihtney Houston</h5>
  </div>
  </div>
  </div>

  <div className="Text4">
        <h5>Encuentra lo mejor del genero:</h5>
        </div>
        <div className="Text44">
        <h4>Cumbia</h4>
        </div>

<div className="Card2">
        <div class="row">
  <div class="col-sm-3">
      <img src={Cumbia1} height="322px" width="210px"></img>
      <h5 className="art9">Apache</h5>
  </div>
  <div class="col-sm-3">
      <img src={Cumbia2} height="322px" width="210px"></img>
      <h5 className="art10">Angeles Azules</h5>
  </div>
  <div class="col-sm-3">
      <img src={Cumbia3} height="322px" width="210px"></img>
      <h5 className="art11">Celso Piña</h5>
  </div>
  <div class="col-sm-3">
      <img src={Cumbia4} height="322px" width="210px"></img>
      <h5 className="art12">Chicos de Barrio</h5>
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