import React, { useEffect, useState } from 'react';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leafleat from 'leaflet';

import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';

import 'leaflet/dist/leaflet.css';
import './styles.css';

import mapMarker from '../../assets/images/map_marker.svg';
import api from '../../services/api';

const mapIcon = Leafleat.icon({
    iconUrl: mapMarker,
    iconAnchor: [29, 68],
    iconSize: [58, 68],
    popupAnchor: [170, 2]
});


interface Entities {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}


const EntitiesMap: React.FC = () => {

    const [entities, setEntities] = useState<Entities[]>([]);

    useEffect(() => {
        api.get('entities').then(res => setEntities(res.data));
    }, []);

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

                {entities.map(entitiy => (
                    <Marker
                        key={entitiy.id}
                        icon={mapIcon}
                        position={[entitiy.latitude, entitiy.longitude]}
                    >
                        <Popup
                            closeButton={false}
                            minWidth={240}
                            maxWidth={240}
                            className="map-popup"
                        >
                            {entitiy.name}
                            <Link to={`/entities/${entitiy.id}`}>
                                <FiArrowRight size={20} color="#fff" />
                            </Link>
                        </Popup>
                    </Marker>
                ))}


            </Map>

            <Link to='entities' className='create-entity'>
                <FiPlus size={32} color='#FFF' />
            </Link>
        </div>
    );
};

export default EntitiesMap;