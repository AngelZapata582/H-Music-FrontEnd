import React, {useEffect, useState} from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './Playlist.css';
import logo from '../../../img/logo.png';
import user from '../../../img/user.png';

const Playlist =() => {
    const [posts, setposts] = useState();
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
            console.log(res.data);
            setposts(res.data);
        });
    },[]);
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


            <div class="Container">{
                !posts ? ("No se encontraron datos"):(
                    
                    <table class="Table">
                            <thead>
                                <div class="line"></div>
                                <tr class="Head">
                                <th>#</th>
                                <th>Titulo</th>
                                <th>Artista</th>
                                <th>Colaboraciones</th>
                                <th>Duración</th>
                                </tr> 
                            </thead>
                            <tbody>
                            {
                                posts.map((post, index) => (
                                    <tr key={index} class="Info">
                                    <td>{post.id}</td>
                                    <td>{post.userId}</td>
                                    <td>{post.title}</td>
                                    <td>{post.completed}</td>
                                    </tr>
                                ))}
                            </tbody>
                    </table>
            )
            }</div>



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
};

export default Playlist;