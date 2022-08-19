import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FilterTableMusic from "../admin/admin.js";
import Login from "../../js/login.js";
import Registro from "../../js/registro.js";
import Inicio from "../inicio/inicio.js";
import Perfil from "../perfil/perfil.js";
import NotFound from "../notfound/NotFound.js"
import Playlist from "../player/Playlist/Playlist.js";
import HomeLogin from "../player/HomeLogin/Homelogin.js";
import Cookies from 'universal-cookie';
export default class RouterPaths extends React.Component{
    state = {
        cookie:null
    }
    constructor(){
        super()
        this.cookies = new Cookies();
    }
    render(){
        return (
            <Router forceRefresh={true}>
                <Routes>
                    {this.cookies.get('token') ? (
                        <Route exact path="/admin" element={<FilterTableMusic/>}/>
                    ):(() => window.location.href = "/login")}
                    
                    {this.cookies.get('token') ? (
                        <Route exact path="/perfil" element={<Perfil/>}/>
                    ):(() => window.location.href = "/login")}
                    
                    {this.cookies.get('token') ? (
                        <Route exact path="/playlist/:id" element={<Playlist/>}/>
                    ):(() => window.location.href = "/login")}

                    
                    {this.cookies.get('token') ? (
                        <Route exact path="/inicio" element={<HomeLogin/>}/>
                    ):(() => window.location.href = "/login")}
                    
                    <Route exact path="/login" element={<Login/>}/>
                    <Route exact path="/registro" element={<Registro/>}/>
                    <Route path="*" element={<NotFound/>}/>
                    <Route exact path="/" element={<Inicio/>}/>
                </Routes>
            </Router>
        )
    }
}