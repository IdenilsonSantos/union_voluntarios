import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Map, Marker, TileLayer } from 'react-leaflet';
import Leafleat from 'leaflet';
import { FiPlus } from 'react-icons/fi';

import Sidebar from '../../components/Sidebar';

import './styles.css';
import 'leaflet/dist/leaflet.css';

import api from '../../services/api';
import mapMarker from '../../assets/images/map_marker.svg';

const mapIcon = Leafleat.icon({
    iconUrl: mapMarker,
    iconAnchor: [29, 68],
    iconSize: [58, 68],
    popupAnchor: [170, 2]
});

export default function CreateEntity() {
    const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [instructions, setInstructions] = useState('');
    const [offered_works, setOfferedWorks] = useState('');
    const [opening_hours, setOpeningHours] = useState('');
    const [open_on_weekends, setOpenOnWeekends] = useState(true);
    const [images, setImages] = useState<File[]>([]);
    const [previewImages, setPreviewImages] = useState<string[]>([]);

    const history = useHistory();

    function handleMapClick(event: Leafleat.LeafletMouseEvent) {
        const { lat, lng } = event.latlng;

        setPosition({
            latitude: lat,
            longitude: lng,
        });
    }

    function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
        if (!event.target.files) return;

        const selectedImages = Array.from(event.target.files);

        setImages([...images, ...selectedImages]);

        const selectedImagesPreview = selectedImages.map(image =>
            URL.createObjectURL(image),
        );
        setPreviewImages([...previewImages, ...selectedImagesPreview]);
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const { latitude, longitude } = position;

        const data = new FormData();

        data.append('name', name);
        data.append('latitude', String(latitude));
        data.append('longitude', String(longitude));
        data.append('about', about);
        data.append('instructions', instructions);
        data.append('offered_works', offered_works);
        data.append('opening_hours', opening_hours);
        data.append('open_on_weekends', String(open_on_weekends));

        images.forEach(image => data.append('images', image));

        await api.post('/entities', data);

        alert('Cadastro realizado com sucesso');
        history.push('/app');
    }

    return (
        <div id="page-create-entity">
            <Sidebar />

            <main>
                <form className="create-entity-form" onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Dados</legend>

                        <Map
                            center={[-24.3286208, -50.6278676]}
                            style={{ width: '100%', height: 280 }}
                            zoom={15}
                            onclick={handleMapClick}
                        >
                            <TileLayer
                                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                            />

                            {position.latitude !== 0 && (
                                <Marker
                                    interactive={false}
                                    icon={mapIcon}
                                    position={[position.latitude, position.longitude]}
                                />
                            )}
                        </Map>

                        <div className="input-block">
                            <label htmlFor="name">Nome</label>
                            <input
                                id="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="about">
                                Sobre <span>Máximo de 300 caracteres</span>
                            </label>
                            <textarea
                                id="name"
                                maxLength={300}
                                value={about}
                                onChange={e => setAbout(e.target.value)}
                            />
                        </div>
                        <div className="input-block">
                            <label htmlFor="offered_works">
                                Trabalhos Oferecidos <span>Máximo de 300 caracteres</span>
                            </label>
                            <textarea
                                id="name"
                                maxLength={300}
                                value={offered_works}
                                onChange={e => setOfferedWorks(e.target.value)}
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="images">Fotos</label>

                            <div className="images-container">
                                {previewImages.map((image, index) => (
                                    <img key={index} src={image} alt={name} />
                                ))}

                                <label htmlFor="image[]" className="new-image">
                                    <FiPlus size={24} color="#15b6d6" />
                                </label>
                            </div>
                            <input
                                multiple
                                type="file"
                                id="image[]"
                                onChange={handleSelectImages}
                            />
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Visitação</legend>

                        <div className="input-block">
                            <label htmlFor="instructions">Instruções</label>
                            <textarea
                                id="instructions"
                                value={instructions}
                                onChange={e => setInstructions(e.target.value)}
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="opening_hours">Horário de funcionamento</label>
                            <input
                                id="opening_hours"
                                value={opening_hours}
                                onChange={e => setOpeningHours(e.target.value)}
                            />
                        </div>

                        <div className="input-block">
                            <label htmlFor="open_on_weekends">Atende fim de semana</label>

                            <div className="button-select">
                                <button
                                    type="button"
                                    className={open_on_weekends ? 'active' : ''}
                                    onClick={() => setOpenOnWeekends(true)}
                                >
                                    Sim
                </button>
                                <button
                                    type="button"
                                    className={!open_on_weekends ? 'active' : ''}
                                    onClick={() => setOpenOnWeekends(false)}
                                >
                                    Não
                </button>
                            </div>
                        </div>
                    </fieldset>

                    <button className="confirm-button" type="submit">
                        Confirmar
          </button>
                </form>
            </main>
        </div>
    );
}