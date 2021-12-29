import "./App.css";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

//Styles
import styled from "styled-components";
import { motion } from "framer-motion";
import Theme from "./Theme";

//Pages
import Home from "./pages/Home";
import Commissions from "./pages/Commissions";
import Originals from "./pages/Originals";
import Contact from "./pages/Contact";
import Process from "./pages/Process";
import About from "./pages/About";

//Components
import NavBar from "./components/NavBar";
import GlobalStyles from "./components/GlobalStyles";
import MobileNavMenu from "./components/MobileNavMenu";
import MobileNavButton from "./components/MobileNavButton";
import MobileHeader from "./components/MobileHeader";

function App() {
  const location = useLocation();
  const pathname = location.pathname;
  const links = ["commissions", "originals", "process", "about", "contact"];
  const [navLinks, setNavLinks] = useState([...links]);
  const [navActive, setNavActive] = useState(true);

  return (
    <StyledApp>
      <Theme>
        <div className={pathname === "/" ? "hidden" : ""}>
          <NavBar navLinks={navLinks} setNavLinks={setNavLinks} />
          <MobileNavButton navActive={navActive} setNavActive={setNavActive} />
          <MobileHeader />
        </div>
        <MobileNavMenu navActive={navActive} setNavActive={setNavActive} />
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
          <Route path="/commissions" element={<Commissions />} />
          <Route path="/originals" element={<Originals />} />
          <Route path="/process" element={<Process />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <GlobalStyles />
      </Theme>
    </StyledApp>
  );
}

const StyledApp = styled(motion.div)`
  .hidden {
    display: none;
  }
  height: 100vh;
  width: 100vw;
`;

export default App;
