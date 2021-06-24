import React from 'react';
import { Link } from 'react-router-dom';
import GalleryPortraitsComponent from './GalleryPortraitsComponent';

function PortraitsComponent() {
    return (
        <>
            <section className="sort-container center flex-col">
                <header className="sort-header">
                    <h1 className="title">Choose the Portfolio</h1>
                    <ul className="sort-list">
                        <Link to="/portfolio/portraits" className="link"><li style={{color: '#929e89', fontWeight: '500'}}>Portraits</li></Link>
                        <Link to="/portfolio/graduation" className="link"><li>Graduation</li></Link>
                        <Link to="/portfolio/sports" className="link"><li>Sports</li></Link>
                    </ul>
                </header>
            </section>
            <GalleryPortraitsComponent/>
        </>
    )
}

export default PortraitsComponent
