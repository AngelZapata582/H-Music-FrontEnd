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

export default class RouterPaths extends React.Component{
    render(){
        return (
            <Router forceRefresh={true}>
                <Routes>
                    <Route exact path="/perfil/:id" element={<Perfil/>}/>
                    <Route exact path="/" element={<Inicio/>}/>
                    <Route exact path="/inicio" element={<HomeLogin/>}/>
                    <Route exact path="/admin" element={<FilterTableMusic/>}/>
                    <Route path="*" element={<NotFound/>}/>
                    <Route exact path="/login" element={<Login/>}/>
                    <Route exact path="/registro" element={<Registro/>}/>
                    <Route exact path="/playlist" element={<Playlist/>}/>
                </Routes>
            </Router>
        )
    }
}