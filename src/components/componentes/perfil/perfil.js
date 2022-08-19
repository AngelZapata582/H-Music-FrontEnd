import React, { useState } from "react"
import './perfil.css';
import user from '../../img/user.png';
import p1 from '../../img/p1.png';
import p2 from '../../img/p2.png';
import p3 from '../../img/p3.png';
import logo from '../../img/logo.png';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Cookies from 'universal-cookie';
import cerrarSesion from '../../js/redirect.js';
import { Link } from "react-router-dom";


import Form from 'react-bootstrap/Form';
class Perfil extends React.Component {
/* Modificando la pantalla de inicio */
    state = {
        show: false,
        name:'',
        email:'',
        playlists:[],
        isload: false,
        imgs:['/static/media/p1.ac31914728d59a498226.png','/static/media/p2.fcdd856bb8fcc2933517.png','/static/media/p3.c8aed91d16e4d860de9a.png'],
        cookies: null,
        config:{},
    };


    constructor(props) {
        super(props)
        this.state.cookies = new Cookies();
        this.state.config = {
            headers: { Authorization: 'Bearer '+this.state.cookies.get('token') }
        }

        this.user.nombre = this.state.cookies.get('user')
        this.user.email = this.state.cookies.get('email')
    }

    user = {
        nombre:'',
        email:''
    }

    componentDidMount() {
        this.get()
        
    }

    
    
    datos = {
        nombre: '',
        email: '',
    }

    handleChangeName = event => {
        this.setState({ 
            name: event.target.value,
        });
    }

    handleChangeEmail = event => {
        this.setState({ 
            email: event.target.value,
        });
    }

    handleSubmit = event => {
        
        event.preventDefault();
        
        const request = {
            nombre: this.state.name,
            email: this.state.email
        };

        
    
        axios.put(`http://127.0.0.1:8000/api/user`,request,this.state.config)
            .then(res => {

                if(res.data.status){
                    this.state.cookies.remove('user')
                    this.state.cookies.remove('email')
                    this.state.cookies.set('user', res.data.user.nombre);
                    this.state.cookies.set('email', res.data.user.email);
                    alert("Usuario actualizado")
                    window.location.href ="/perfil"
                }else{
                    alert("Algo salio mal")
                }
            })
    }

    showModal = () => {
        this.componentDidMount()
        this.setState({ show: true });
    };
    
    hideModal = () => {
        this.setState({ show: false });
    };

    get = async event  =>{
        const res = await axios.get(`http://127.0.0.1:8000/api/playlist`,this.state.config) 
        this.setState({
            playlists : res.data.playlists,
            isload: true
        })
    }

    

    render() {
        
        if(this.state.isload){
            const getPlaylists = () => {
                
                return this.state.playlists.map((data) => {
                    var img = this.state.imgs[Math.floor(Math.random()*this.state.imgs.length)]
                    return (
                        <div className="row py-3">
                            <div className="col-lg-5">
                                <img className="w-75" src={img} alt={data.nombre}></img>
                            </div>
                            <div className="col-lg-7 text-start text-white">
                                <h4 className="text-bold">{data.nombre}</h4>
                                <p className="text-grey text-break">
                                    {data.descripcion}
                                </p>
                            </div>
                        </div>
                    )
                })
            }

            
    
    
            return ( /* position-relative */
                <div className="position-relative bg-black ">
                {/* Navbar User */}
                <div className="container-fluid">
                            <div className="row bg-black p-3 text-white ">
                                    <div className="col text-start"><h5><a className="link" href="/inicio">H-Music</a></h5></div>
                            <div className="col text-end"> 
                            <Link to="/perfil">
                                <button  className="btn btn-primary btn-sm rounded-pill px-3 me-3" type="button" >
                                <img src={user} alt={this.user.nombre} className="g-0 pe-2 pb-1" width={25}></img>
                                    {this.user.nombre}
                                    </button>
                            </Link>
                            <button  className="btn  btn-light btn-sm rounded-pill px-3" type="button" onClick={cerrarSesion} >Cerrar sesion</button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-grey"><br/> <br/> <br/> <br/></div>
                
                <div className="container-fluid">
                    
                    <div className="row bg-grey justify-content-center pt-5">
                        <div className="col-lg-4 bg-white align-self-center">
                            <div className="row ">
                                    <div className="col p-3">
                                        <img src={user} alt={this.user.nombre} className="w-100 img-fluid"></img>
                                    </div>
    
                                    <div className="col text-start p-4">
                                        <div className="row">
                                            <h5 className="text-bold">{this.user.nombre}</h5> 
                                            <span className="">{this.user.email}</span>
                                        </div>
                                    </div>
                            </div>
                            <div className="row-columns-4 pb-3 ">
                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-primary btn-sm rounded-pill px-5" type="button" onClick={this.showModal}>Actualizar mis datos</button>
                            </div>
                        </div>
                    </div>
                </div>
    
    
                <div className="container-fluid bg-black ">
                    <div className="row p-5">
                            <h3 className="text-start text-bold text-white" href="/">Mis Playlists </h3>
                    </div>
    
                    {getPlaylists()}
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
                        <Link to="/">
                            <img src={logo} alt="H-Music" className="img-fluid "></img>
                        </Link>
                        </div>
                    </div>
                </div>
    
                <Modal show={this.state.show} onHide={this.hideModal}>
                <Modal.Header closeButton>
                    <h5>Actualizar mis datos</h5>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control type="text" placeholder={this.user.nombre} name="name" onChange={this.handleChangeName}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Correo electronico:</Form.Label>
                        <Form.Control type="email" placeholder={this.user.email} name="email" onChange={this.handleChangeEmail}/>
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <button variant="primary" type="submit"  className="btn btn-primary btn-sm mb-3 px-3" onClick={this.hideModal}>
                            Guardar
                        </button>
                    </div>
                    </Form>
                </Modal.Body>
                </Modal>
            </div> 
            )

        }else{
            return (
                <div className="position-relative bg-black ">
                    {/* Navbar User */}
                    <div className="container-fluid">
                            <div className="row bg-black p-3 text-white ">
                                    <div className="col text-start"><h5><a className="link" href="/inicio">H-Music</a></h5></div>
                            <div className="col text-end"> 
                            <Link to="/perfil">
                                <button  className="btn btn-primary btn-sm rounded-pill px-3 me-3" type="button" >
                                <img src={user} alt={this.user.nombre} className="g-0 pe-2 pb-1" width={25}></img>
                                    {this.user.nombre}
                                    </button>
                            </Link>
                            <button  className="btn  btn-light btn-sm rounded-pill px-3" type="button" onClick={cerrarSesion} >Cerrar sesion</button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-grey"><br/> <br/> <br/> <br/></div>
                
                <div className="container-fluid ">
                    
                    <div className="row bg-grey justify-content-center pt-5">
                    
                        <div className="col-lg-4 bg-white align-self-center">
                            <div className="row ">
                                    <div className="col p-3">
                                        <img src={user} alt={this.user.nombre} className="w-100 img-fluid"></img>
                                    </div>
    
                                    <div className="col text-start p-4">
                                        <div className="row">
                                            <h5 className="text-bold">{this.user.nombre}</h5> 
                                            <span className="">{this.user.email}</span>
                                        </div>
                                    </div>
                            </div>
                            <div className="row-columns-4 pb-3 ">
                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-primary btn-sm rounded-pill px-5" type="button" onClick={this.showModal}>Actualizar mis datos</button>
                            </div>
                        </div>
                    </div>
                </div>
    
    
                <div className="container-fluid bg-black ">
                    <div className="row p-5">
                            <h3 className="text-start text-bold text-white">Mis Playlists</h3>
                    </div>
                    <h5  className="text-white bg-black"> No hay playlist registradas</h5>
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
                        <Link to="/">
                            <img src={logo} alt="H-Music" className="img-fluid "></img>
                        </Link>
                        </div>
                    </div>
                </div>
    
                <Modal show={this.state.show} onHide={this.hideModal}>
                <Modal.Header closeButton>
                    <h5>Actualizar mis datos</h5>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control type="text" placeholder={this.user.nombre} name="name" onChange={this.handleChangeName}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Correo electronico:</Form.Label>
                        <Form.Control type="email" placeholder={this.user.email} name="email" onChange={this.handleChangeEmail}/>
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <button variant="primary" type="submit"  className="btn btn-primary btn-sm mb-3 px-3" onClick={this.hideModal}>
                            Guardar
                        </button>
                    </div>
                    </Form>
                </Modal.Body>
                </Modal>
            </div> 
            )
            
        }
    
    }
}


export default Perfil




