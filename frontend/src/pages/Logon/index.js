import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';// importa o componente link, para ser usado no lugar da tag <a

import {FiLogIn} from 'react-icons/fi'; //importa icones pro react "utilizado pacote fi" // npm install react-icons

import api from '../../services/api';

import './styles.css';

import heroesImg from '../../assets/heroes.png';//importando img
import logoImg from '../../assets/logo.svg';//importando logo

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });
           
            localStorage.setItem('ongId', id);//localstore as variaveis ficam disponiveis para toda aplicacao
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');

        } catch (err){
            alert('Falha no login, tente novamente.');

        }





    }

    return (
       <div className="logon-container">
        <section className="form">
            <img src={logoImg} alt="Be The Hero"/>

                <form onSubmit={handleLogin}>
        
                    <h1>Faça seu Logon</h1>

                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
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