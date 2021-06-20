import React, { useEffect } from "react";

import NavComponent from "./components/NavComponent";
import FooterComponent from "./components/FooterComponent";

import "./styles/burger.css";
import "./styles/footer.css";
import "./styles/nav.css";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./nav.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <>
      <NavComponent />
      <FooterComponent />
    </>
  );
}

export default App;
