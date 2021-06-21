import React from 'react';
import { Link } from 'react-router-dom';

function PortraitsComponent() {
    return (
        <>
            <section className="sort-container center flex-col">
                <header className="sort-header">
                    <h1 className="title">Choose the Portfolio</h1>
                    <ul className="sort-list">
                        <Link to="/portraits" className="link"><li style={{color: '#929e89', fontWeight: '500'}}>Portraits</li></Link>
                        <Link to="/graduation" className="link"><li>Graduation</li></Link>
                        <Link to="/sports" className="link"><li>Sports</li></Link>
                    </ul>
                </header>
            </section>
            <section className="photo-container">
                <div className="wrapper-grid">
                    <div className="grid-one"></div>
                    <div className="grid-two"></div>
                    <div className="grid-three"></div>
                </div>
            </section>
        </>
    )
}

export default PortraitsComponent
