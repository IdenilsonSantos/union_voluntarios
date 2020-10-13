import React from 'react';

import { Map, TileLayer } from 'react-leaflet';

import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import 'leaflet/dist/leaflet.css';
import './styles.css';

import mapMarker from '../../assets/images/map_marker.svg';

const EntitiesMap = () => {
    return (
        <div id='page-map'>
            <aside>
                <header>
                    <img src={mapMarker} alt='Happy' />

                    <h2>Escolha uma entidade no mapa</h2>
                    <p>Elas precisam da sua ajuda</p>
                </header>

                <footer>
                    <strong>Telêmaco Borba</strong>
                    <span>Paraná</span>
                </footer>
            </aside>

            <Map
                center={[-24.3286208, -50.6278676]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
            </Map>

            <Link to='' className='create-entity'>
                <FiPlus size={32} color='#FFF' />
            </Link>
        </div>
    );
};

export default EntitiesMap;