import React,{ Component } from "react"
import './perfil.css';
import user from '../../img/user.png';
import p1 from '../../img/p1.png';
import p2 from '../../img/p2.png';
import p3 from '../../img/p3.png';
import logo from '../../img/logo.png';

class Perfil extends Component {
/* Modificando la pantalla de inicio */
    render() {
        return ( 
        <div className="overflow bg-grey position-relative">

            <div className="container-fluid">
                <div className="row bg-black p-3 text-white">Navbar</div>
            </div>
            
            <div className="container-fluid">
                <br/> <br/> <br/> <br/>
                <div className="row bg-grey justify-content-center pt-5">
                    <div className="col-lg-4 bg-white align-self-center">
                        <div className="row ">
                                <div className="col p-3">
                                    <img src={user} alt="Juan vazquez" className="w-100 img-fluid"></img>
                                </div>

                                <div className="col text-start p-4">
                                    <div className="row">
                                        <h5 className="text-bold">Juan Vazquez</h5> 
                                        <span className="">juanvazquez_jesuss@hotmail.com</span>
                                    </div>
                                </div>
                        </div>
                        <div className="row-columns-4 pb-3 ">
                                <button className="btn btn-primary btn-sm rounded-pill px-5" type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal">Actualizar mis datos</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-black ">
                <div className="row p-5">
                        <h3 className="text-start text-bold text-white">Mis Playlists</h3>
                </div>

                <div className="row py-3">
                        <div className="col-lg-5">
                            <img className="w-75" src={p2} alt="Rinko Mania"></img>
                        </div>
                        <div className="col-lg-7 text-start text-white">
                            <h4 className="text-bold">Rinko Mania</h4>
                            <p className="text-grey text-break">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at lectus et arcu 
                                bibendum placerat et vitae turpis. In sed sem id nibh euismod viverra. 
                                Sed non leo a orci lobortis pulvinar. 
                            </p>
                            <span>5 canciones</span>
                        </div>
                </div>

                <div className="row py-3">
                        <div className="col-lg-5">
                            <img className="w-75" src={p1} alt="Relax codi"></img>
                        </div>
                        <div className="col-lg-7 text-start text-white">
                            <h4 className="text-bold">Relax codi</h4>
                            <p className="text-grey text-break">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at lectus et arcu 
                                bibendum placerat et vitae turpis. In sed sem id nibh euismod viverra. 
                                Sed non leo a orci lobortis pulvinar. 
                            </p>
                            <span>32 canciones</span>
                        </div>
                </div>

                <div className="row py-3">
                        <div className="col-lg-5">
                            <img className="w-75" src={p3} alt="Turtle"></img>
                        </div>
                        <div className="col-lg-7 text-start text-white">
                            <h4 className="text-bold">Turtle</h4>
                            <p className="text-grey text-break">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at lectus et arcu 
                                bibendum placerat et vitae turpis. In sed sem id nibh euismod viverra. 
                                Sed non leo a orci lobortis pulvinar. 
                            </p>
                            <span>13 canciones</span>
                        </div>
                </div>
            </div>

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

            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Actualizar mis datos</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body text-start">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre:</label>
                            <input type="text" className="form-control" placeholder="Juan Vazquez"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Correo electronico:</label>
                            <input type="email" className="form-control" placeholder="juanvazquez_jesuss@hotmail.com"/>
                        </div>
                        
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary btn-sm rounded-pill px-5">Actualizar</button>
                            <button type="button" className="btn btn-secondary btn-sm rounded-pill px-5" data-bs-dismiss="modal">Cancelar</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
            </div>

        </div>        
        )
    }
}
export default Perfil