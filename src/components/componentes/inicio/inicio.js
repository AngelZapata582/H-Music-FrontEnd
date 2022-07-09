import React,{ Component } from "react"
import './inicio.css';
import logo_vertical from '../../img/logo_vertical.png';
import inicio3 from '../../img/inicio3.png';
import inicio2 from '../../img/inicio2.png';
import inicio from '../../img/inicio.png';
import categoria1 from '../../img/categoria1.png';
import categoria2 from '../../img/categoria2.png';
import categoria3 from '../../img/categoria3.png';
import categoria4 from '../../img/categoria4.png';
import categoria2sm from '../../img/categoria2sm.png';
import logo from '../../img/logo.png';

class Inicio extends Component {
/* Modificando la pantalla de inicio */
    render() {
        return ( 
        <div className="overflow bg-grey">
            {/* Nav */}
            <div className="container-fluid">
                <div className="row bg-black p-3 text-white">Navbar</div>
            </div>

            {/* Inicio */}
            <div className="container-fluid bg-black">
                <div className="row vh-100 position-relative">
                    <div className="col-lg-5 col-md-12 g-0">
                        <div className=" marco"></div>
                        <h1 className="text-bold text-white text-start text-titulo position-absolute">
                            Nuestra vida en la <br />
                            música
                        </h1>

                        <span className="text-white text-start text-span position-absolute pt-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                            Maecenas efficitur turpis eu ligula vulputate, <br/>
                            ac dapibus sapien placerat. 
                        </span>
                        
                    </div>
                    <div className="col-lg-7 d-lg-block d-none g-0">
                        <img src={inicio} alt="H-Music" className="vh-100 w-100"></img>
                    </div>
                </div>
            </div>


            <div className="container bg-grey">
                {/* info + logo */}
                <div className="row justify-content-center pb-5">
                    <div className="col-lg-6 text-start px-5 p-5 bg-white">
                        <div className="row">
                            <h4 >
                                <b>
                                Bienvenido a H-Music una plataforma <br/>
                                para escuchar tu música <br/>
                                favorita. <br/>
                                </b>
                            </h4>
                        </div>

                        <div className="row p-4 px-1">
                            <p className="text-grey">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Maecenas efficitur turpis eu ligula vulputate, 
                            ac dapibus sapien placerat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Maecenas efficitur turpis eu ligula vulputate, 
                            ac dapibus sapien placerat.
                            </p>
                        </div>

                        <div className="row p-3 px-1">
                            <b>Conocenos</b>
                            <p className="text-grey">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Maecenas efficitur turpis eu ligula vulputate, 
                            ac dapibus sapien placerat.
                            </p>
                        </div>

                        <div className="row p-3 px-1">
                            <b>Info</b>
                            <p className="text-grey">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Maecenas efficitur turpis eu ligula vulputate, 
                            ac dapibus sapien placerat.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 d-lg-block d-none bg-white">
                        <img src={logo_vertical} alt="H-Music"></img>
                    </div>
                </div>
                
                {/* img +info */}
                <div className="row justify-content-center pt-5 py-5"> 
                    <div className="col-lg-4 d-lg-block d-sm-block d-md-none g-0">
                        <img src={inicio2} alt="H-Music" height={400}></img>
                    </div>
                    <div className="col-lg-6 col-sm-12 g-0 text-start p-4 bg-black text-white">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Maecenas efficitur turpis eu ligula vulputate, 
                            ac dapibus sapien placerat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Maecenas efficitur turpis eu ligula vulputate, 
                            ac dapibus sapien placerat.
                        </p>
                    </div>
                </div>
                
                {/* Album Bad-Bunny */}
                <div className="row justify-content-center py-5 bg-grey"> 
                    <div className="col-lg-6 g-0 text-start ">
                        <h1 className="text-album">
                            <b>
                            Bad Bunny <br/>
                            llegó a H-Music
                            </b>
                        </h1>
                        <span className="text-grey">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                            Maecenas efficitur turpis eu.
                        </span>
                    </div>
                    <div className="col-lg-4 col-sm-12 p-0 bg-primary ">
                        <img src={inicio3} alt="Nuevo Album de Bad Bunny" className="w-100"></img>
                    </div>
                </div> 

                {/* Musica solo para ti */}
                <div className="row py-5 pt-5 bg-grey">
                    <h1 className="text-album text-lg-center text-sm-start"><b>Música solo para ti.</b></h1>

                    <div className="row pb-5">
                        <span className="text-grey">
                        Tú escuchas. Te gusta. Nosotros <br/>
                        aprendemos.
                        </span>
                    </div>

                    <div className="row">
                        <p className="text-grey d-lg-block d-none">
                        Nuestra aplicación de música te propone las <br/> <b>recomendaciones más personalizadas</b>, para <br /> que tu vida tenga la banda sonora que se <br /> merece.
                        </p>
                        <p className="text-grey text-break d-sm-block d-lg-none">
                        Nuestra aplicación de música te propone las <b>recomendaciones más personalizadas</b>, para que tu vida tenga la banda sonora que se merece.
                        </p>
                    </div>

                </div>

                {/* Recomendaciones */}
                <div className="row justify-content-center gx-0 pt-2 bg-grey">
                    <div className="col-lg-3">
                            <div className="row justify-content-center">
                                <img src={categoria1} alt="Descubrimiento" className="w-75"></img>
                                <p className=" text-grey text-center">
                                    Los lunes, explora <br/> canciones que no <br/> conoces.
                                </p>
                            </div>

                            <div className="row pt-2 justify-content-center">
                                <img src={categoria4} alt="Nuevos lanzamientos" className="w-75"></img>
                                <p className=" text-grey text-center">
                                    Los viernes, novedades <br/> de artistas que te gustan.
                                </p>
                            </div>
                            {/* Cuando sea sm mostrar  */}
                            <div className="row pt-5 justify-content-center d-sm-block d-lg-none">
                                <img src={categoria2sm} alt="Flow" className="w-75"></img>
                                <p className=" text-grey text-center">
                                    Un mix infinito de favoritos y nuevas canciones.
                                </p>
                            </div>

                            <div className="row pt-5 justify-content-center d-sm-block d-lg-none">
                            <img src={categoria3} alt="Chill" className="w-75"></img>
                            <p className=" text-grey text-center">
                                Los domingos, nuevas selecciones de chill.
                            </p>
                            </div>
                    </div>
                    {/* Cuando sea sm ocultar  */}
                    <div className="col-lg-4 d-lg-block d-none">
                        <img src={categoria2} alt="Flow" className="w-100"></img>
                        <p className=" text-grey text-center">
                            Un mix infinito de favoritos y nuevas canciones.
                        </p>
                    </div>

                    <div className="col-lg-3 d-lg-block d-none">
                        <img src={categoria3} alt="Chill" className="w-75"></img>
                        <p className=" text-grey text-center">
                            Los domingos, nuevas <br/> selecciones de chill.
                        </p>
                    </div>
                </div>
            </div>
            <br/>
            {/* Footer */}
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
        )
    }
}
export default Inicio