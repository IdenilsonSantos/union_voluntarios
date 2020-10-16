import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import mapMarker from '../../assets/images/map_marker.svg';

import './styles.css';

export default function Sidebar() {
    const { goBack } = useHistory();

    return (
        <aside className="app-sidebar">
            <img src={mapMarker} alt="Union" />

            <footer>
                <button type="button" onClick={goBack}>
                    <FiArrowLeft size={24} color="#FFF" />
                </button>
            </footer>
        </aside>
    );
}