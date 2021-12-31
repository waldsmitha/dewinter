import "./App.css";
import { useState, useEffect } from "react";
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
import Footer from "./components/Footer";

//Animations
import { AnimatePresence } from "framer-motion";
import { pageAnimation } from "./animations";

function App() {
  const location = useLocation();
  const pathname = location.pathname;
  const links = ["commissions", "originals", "process", "about", "contact"];
  const [navLinks, setNavLinks] = useState([...links]);
  const [navActive, setNavActive] = useState(true);
  const [pathState, setPathState] = useState(location.pathname);

  return (
    <StyledApp>
      <Theme>
        <NavBar
          navLinks={navLinks}
          setNavLinks={setNavLinks}
          pathname={pathname}
        />
        <MobileHeader pathname={pathname} />
        <MobileNavMenu navActive={navActive} setNavActive={setNavActive} />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Home />} />
            <Route path="/commissions" element={<Commissions />} />
            <Route path="/originals" element={<Originals />} />
            <Route path="/process" element={<Process />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <div className={pathname === "/" ? "hidden" : ""}>
          <MobileNavButton navActive={navActive} setNavActive={setNavActive} />
        </div>
        {/* <Footer pathname={pathname} /> */}
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
  color: #fffdf6;
`;

export default App;
