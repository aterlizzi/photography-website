import React from 'react'
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavComponent from './components/NavComponent';
import FooterComponent from './components/FooterComponent';
import Months from './components/Months';
import CalendarComp from './components/CalendarComp';
import Auth from './components/Auth';



import './styles/nav.css'
import './styles/burger.css'
import './styles/bookings.css'
import './styles/footer.css'
import './styles/signup.css'


function App() {
    const [renderHeader, setRenderHeader] = useState(true);
    const [clickedMonth, setClickedMonth] = useState('');
    const [clickedYear, setClickedYear] = useState('');

    const handleRenderHeader = (e) => {
        setClickedMonth(e.target.getAttribute('data-month'));
        setClickedYear(e.target.getAttribute('data-year'));
        setRenderHeader(false);
    }
    const handleExitClick = () => {
        setRenderHeader(true);
    }



    
    
        useEffect(() => {
            const script = document.createElement('script');
            script.src = './nav.js';
            script.async = true;
            document.body.appendChild(script);
        }, []);


    return (
        <BrowserRouter>
            <>
                <NavComponent />
                <Switch>
                    <Route path='/booking'  exact render={() => (
                        <section className = 'grid-container flex-center'>
                            {renderHeader ?             
                            (<><header className="flex-center header">
                                <h1>Book a Session.</h1>
                                <p>Find an available session by clicking a month below.</p>
                            </header>
                            <div className="month-grid">
                                <Months handleRenderHeader={handleRenderHeader}/>
                            </div></>)
                            : (<CalendarComp month={clickedMonth} handleExitClick={handleExitClick} year={clickedYear} />)}
                        </section>
                    )}/>
                    <Route path="/booking/auth" exact component={Auth}/>
                    <Route path="/booking/" render={() => <div>Error 404: Page not found.</div>}/>
                </Switch>
                <FooterComponent />
            </>
        </BrowserRouter>
    )
}

export default App
