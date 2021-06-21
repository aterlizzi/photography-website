import React from 'react';
import { Link } from 'react-router-dom';

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
            <section className="photo-container">
                <div className="wrapper-grid">
                    <div className="grid-one grid"></div>
                    <div className="grid-two grid"></div>
                    <div className="grid-three grid"></div>
                </div>
            </section>
        </>
    )
}

export default SportsComponent
