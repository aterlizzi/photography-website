import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavComponent from "./components/NavComponent";
import FooterComponent from "./components/FooterComponent";
import Portraits from './components/PortraitsComponent';
import Graduation from './components/GraduationComponent';
import Sports from './components/SportsComponent';


import "./styles/burger.css";
import "./styles/footer.css";
import "./styles/nav.css";
import "./styles/portfolio.css";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./nav.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <BrowserRouter>
      <>
        <NavComponent />
        <Switch>
          <Route path='/' exact component={Portraits}/>
          <Route path='/portraits' exact component={Portraits}/>
          <Route path='/graduation' exact component={Graduation}/>
          <Route path='/sports' exact component={Sports}/>
          <Route path='/' render={() => <div>Error 404: Page not found.</div>}/>
        </Switch>
        <FooterComponent />
      </>
    </BrowserRouter>
  );
}

export default App;
