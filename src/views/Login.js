import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import google from '../assets/img/google-icon.png';
import twitter from '../assets/img/twitter-icon.png';
import "../assets/css/Login.css";

export default class Login extends Component{
    render(){
        return(
            <React.Fragment>
                <div class="login">
                    <div class="login__container">
                        <h2>Iniciar sesión</h2>
                        <div class="login__container--form">
                            <input class="input" type="text" placeholder="Correo"/>
                            <input class="input" type="password" placeholder="Contraseña"/>
                            <Link class="button" to="/Admin">Iniciar sesión</Link>
                            <div class="login__container--remember-me">
                                <label>
                                    <input type="checkbox" name="" id="cbox1" value="checkbos"/>Recuérdame
                                </label>
                                <a href="/">Olvidé mi contraseña</a>
                            </div>
                        </div>
                        <div class="login__container--social-media">
                            <div><img src={google} alt="Google"/>Inicia sesión con Google</div>
                            <div><img src={twitter} alt="Twitter"/>Inicia sesión con Twitter</div>
                        </div>
                        <p class="login__container--register">No tienes ninguna cuenta <a href="">Regístrate</a></p>
                    </div>
                </div>
                <footer class="footer">
                    <a href="/">Términos de uso</a>
                    <a href="/">Declaración de privacidad</a>
                    <a href="/">Centro de ayuda</a>
                </footer>
            </React.Fragment>
        );
    }
}