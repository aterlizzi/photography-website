import React from 'react';
import ReactDOM from 'react-dom';
import FooterComponent from './components/FooterComponent';
import NavComponent from './components/NavComponent';
import Testimonials from './components/Testimonials';


import './styles/testimonials.css';
import './styles/burger.css';
import './styles/footer.css';
import './styles/nav.css';

function App(){
    return (
        <>
            <NavComponent/>
            <Testimonials/>
            <FooterComponent/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));
