import React, { Component, useRef } from 'react';
import fire from "./config/Fire";
import ReCAPTCHA from "react-google-recaptcha";


export default class Login extends Component {
  usuario = React.createRef();
  contraseña = React.createRef();

  constructor(props) {
    super(props);
    //Este enlace es necesario para hacer que `this` funcione en el callback
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }
  login(e) {
    e.preventDefault();
    var misusuario = this.usuario.current.value;
    var micontraseña = this.contraseña.current.value;

    fire
      .auth()
      .signInWithEmailAndPassword(misusuario, micontraseña)
      .then(u => {})
      .catch(function(error) {
        console.log(error);
      });
  }

  signup(e) {
    e.preventDefault();
    var miusuario = this.usuario.current.value;
    var micontraseña = this.contraseña.current.value;
    fire
      .auth()
      .createUserWithEmailAndPassword(miusuario, micontraseña)
      .then(u => {})
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {

    const captcha = (null);

    const onChange = () => {
      console.log(captcha.current.getValue())
      
    }

    return (
      
        
        <div className="contenedor">
			<div className="registrate">
				<h1>Registrate</h1>
				<form className="formulario" action="" >
					<input type="text" name="usuario" id="usuario" placeholder="Usuario" ref={this.usuario} />
					<input type="password" name="password" id="password" placeholder="Contraseña" ref={this.contraseña} />
					
					<div className="recaptcha">
            <ReCAPTCHA
            ref={captcha}
            sitekey="6Ldu-TYbAAAAAOfNKiSzjp97sUGD1DMaOtf_ccKM"
            onChange={onChange}
            />
					</div>
					<button type="submit"  onClick={this.login} >Iniciar Sesion</button>
          <br/>
          <button onClick={this.signup}>Registrarse</button>
				</form>
			</div>
			
		</div>
        
      
    );
  }
}
