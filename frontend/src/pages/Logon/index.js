import React from 'react';
import {Link} from 'react-router-dom';// importa o componente link, para ser usado no lugar da tag <a

import {FiLogIn} from 'react-icons/fi'; //importa icones pro react "utilizado pacote fi" // npm install react-icons

import './styles.css';

import heroesImg from '../../assets/heroes.png';//importando img
import logoImg from '../../assets/logo.svg';//importando logo

export default function Logon() {
    return (
       <div className="logon-container">
        <section className="form">
            <img src={logoImg} alt="Be The Hero"/>

                <form>
        
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Sua ID"/>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                     <FiLogIn size={16} color="#E02041"/>
                     Não tenho Cadastro!
                    </Link>
                     
                </form>

        </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}