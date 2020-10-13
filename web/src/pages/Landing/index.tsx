import React from 'react';

import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/images/logo_app.svg';

const Landing = () => {
    return (
        <div id='page-landing'>
            <div className='content-wrapper'>
                <img src={logo} alt='Union' />

                <main>
                    <h1>Faça o bem ajudando com o seu tempo</h1>
                    <p>Visite entidades e se disponibilize
para trabalhos voluntários..</p>
                </main>

                <div className='location'>
                    <strong>Telêmaco Borba</strong>
                    <span>Paraná</span>
                </div>

                <Link to='/app' className='enter-app'>
                    <FiArrowRight size={26} color='rgba(0, 0, 0, 0.6)' />
                </Link>
            </div>
        </div>
    );
};

export default Landing;