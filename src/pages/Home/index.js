import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component{
    render(){
        return(
            <div>
                    <h2>Bem Vindo a Pagina Home</h2> <br/>
                    <Link to="/sobre">Ir Para Pagina Sobre</Link>
            </div>
        );
    }
}

export default Home;