import React, { Component } from "react"
import '../css/login.css';
import logo from '../img/logo.png';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

class Login extends Component {
    state = {
        email: '',
        password: '',
    }



    handleChangeEmail = event => {
        this.setState({ 
            email: event.target.value,
        });
    }

    handleChangeContraseña = event => {
        this.setState({ 
            password: event.target.value,
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const request = {
            email: this.state.email,
            password: this.state.password
        };

        axios.post(`http://127.0.0.1:8000/api/login`,request).then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

  render() {
    return (
      <div>
          <div className="container-fluid bg">
      <div className="row align-items-center vh-100">
          <div className="col-lg-6">
              <img src={logo} alt="H-Music" className=""></img>
          </div>

          <div className="line px-0"></div>

          <div className="col-lg-5 px-5 letras">
              <form onSubmit={this.handleSubmit}>
                  <div className="mb-3 text-start">
                      <label for="exampleInputEmail1" className="form-label py-2">Ingrese su correo:</label>
                      <input type="email" name="email" onChange={this.handleChangeEmail} className="form-control rounded-pill" id="exampleInputEmail1" aria-describedby="emailHelp" />

                  </div>
                  <div className="mb-3 text-start ">
                      <label for="exampleInputPassword1" className="form-label py-2">Ingrese su contraseña:</label>
                      <input type="password" name="password" onChange={this.handleChangeContraseña} className="form-control rounded-pill" id="exampleInputPassword1"/>
                  </div>

                  <div className="d-grid gap-2 col-6 mx-auto py-2">
                  <button type="submit" className="btn btn-primary text-center rounded-pill">Iniciar</button>

                  </div>
              </form>
          </div>
      </div>
         </div>
  </div>
    )
  }
}
export default Login