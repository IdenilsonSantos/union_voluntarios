import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiInfo } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';
import Leaflet from 'leaflet'

import mapMarker from '../../assets/images/map_marker.svg';
import api from '../../services/api';

import Sidebar from '../../components/Sidebar';

import './styles.css';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarker,
    iconAnchor: [29, 68],
    iconSize: [28, 38],
    popupAnchor: [170, 2]
});

interface Entity {
    latitude: number;
    longitude: number;
    name: string;
    about: string;
    instructions: string;
    offered_works: string;
    opening_hours: string;
    open_on_weekends: string;
    images: Array<{
        id: string;
        url: string;
    }>;
}

interface Params {
    id: string;
}

export default function Entity() {
    const [entity, setEntity] = useState<Entity>();
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const params = useParams<Params>();

    useEffect(() => {
        api.get(`entities/${params.id}`).then(res => setEntity(res.data));
    }, [params.id]);

    if (!entity) return <p>Carregando...</p>;

    return (
        <div id="page-entity">
            <Sidebar />

            <main>
                <div className="entity-details">
                    <img
                        src={entity.images[activeImageIndex].url}
                        alt={entity.name}
                    />

                    <div className="images">
                        {entity.images.map((image, index) => (
                            <button
                                key={image.id}
                                className={activeImageIndex === index ? 'active' : ''}
                                type="button"
                                onClick={() => setActiveImageIndex(index)}
                            >
                                <img src={image.url} alt={entity.name} />
                            </button>
                        ))}
                    </div>

                    <div className="entity-details-content">
                        <h1>{entity.name}</h1>
                        <p>Sobre: {entity.about}</p>
                        <p>Trabalhos a fazer: {entity.offered_works}</p>

                        <div className="map-container">
                            <Map
                                center={[entity.latitude, entity.longitude]}
                                zoom={16}
                                style={{ width: '100%', height: 280 }}
                                dragging={false}
                                touchZoom={false}
                                zoomControl={false}
                                scrollWheelZoom={false}
                                doubleClickZoom={false}
                            >
                                <TileLayer
                                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                                />
                                <Marker
                                    interactive={false}
                                    icon={mapIcon}
                                    position={[entity.latitude, entity.longitude]}
                                />
                            </Map>

                            <footer>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={`https://www.google.com/maps/dir/?api=1&destination=${entity.latitude},${entity.longitude}`}
                                >
                                    Ver rotas no Google Maps
                </a>
                            </footer>
                        </div>

                        <hr />

                        <h2>Instruções para visita</h2>
                        <p>{entity.instructions}</p>

                        <div className="open-details">
                            <div className="hour">
                                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                                {entity.opening_hours}
                            </div>
                            {entity.open_on_weekends ? (
                                <div className="open-on-weekends">
                                    <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                                </div>
                            ) : (
                                    <div className="open-on-weekends dont-open">
                                        <FiInfo size={32} color="#FF669D" />
                  Não atendemos <br />
                  fim de semana
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}