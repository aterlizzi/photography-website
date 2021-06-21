import React from 'react';
import { Link } from 'react-router-dom';

import GallerySportComponent from './GallerySportComponent';


function SportsComponent() {
    return (
        <>
            <section className="sort-container center flex-col">
                <header className="sort-header">
                    <h1 className="title">Choose the Portfolio</h1>
                    <ul className="sort-list">
                        <Link to="/portraits" className="link"><li>Portraits</li></Link>
                        <Link to="/graduation" className="link"><li>Graduation</li></Link>
                        <Link to="/sports" className="link"><li style={{color: '#929e89', fontWeight: '500'}}>Sports</li></Link>
                    </ul>
                </header>
            </section>
            <GallerySportComponent/>
        </>
    )
}

export default SportsComponent
