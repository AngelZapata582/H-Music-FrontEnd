import React, {useEffect, useState} from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './Playlist.css';

const Playlist =() => {
    const [posts, setposts] = useState();
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
            console.log(res.data);
            setposts(res.data);
        });
    },[]);
    return <div class="Container">{
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
        }</div>;
};

export default Playlist;