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
          <Route path='/portfolio/' exact component={Portraits}/>
          <Route path='/portfolio/portraits' exact component={Portraits}/>
          <Route path='/portfolio/graduation' exact component={Graduation}/>
          <Route path='/portfolio/sports' exact component={Sports}/>
          <Route path='/portfolio/' render={() => <div>Error 404: Page not found.</div>}/>
        </Switch>
        <FooterComponent />
      </>
    </BrowserRouter>
  );
}

export default App;
