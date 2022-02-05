import { useState } from "react";
import { Route, Routes, useLocation, Link } from "react-router-dom";

//Styles
import "./App.css";
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

//Media
import wmb from "./media/white_medium_badge.png";

function App() {
  const location = useLocation();
  const pathname = location.pathname;
  const [navActive, setNavActive] = useState(true);

  return (
    <StyledApp>
      <Theme>
        <div className="wrapper">
          <NavBar pathname={pathname} />
          <MobileHeader pathname={pathname} />
          <MobileNavMenu navActive={navActive} setNavActive={setNavActive} />
          <Link to="/">
            <img src={wmb} className="logo" alt="" />
          </Link>
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route exact path="/" element={<Home />} />
              <Route path="/projects" element={<Commissions />} />
              <Route path="/originalpieces" element={<Originals />} />
              <Route path="/process" element={<Process />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            {pathname !== "/" && (
              <MobileNavButton
                navActive={navActive}
                setNavActive={setNavActive}
              />
            )}
          </AnimatePresence>
        </div>
        <Footer pathname={pathname} />
        <GlobalStyles />
      </Theme>
    </StyledApp>
  );
}

const StyledApp = styled(motion.div)`
  .hidden {
    display: none;
  }

  width: 100vw;
  /* overflow-x: hidden; */
  color: #fffdf6;

  .logo {
    z-index: 100;
    position: fixed;
    top: 1rem;
    left: 1rem;
    height: 80px;
  }

  .wrapper {
    min-height: 100vh;
  }

  @media screen and (max-width: 768px) {
    .logo {
      display: none;
    }
  }
`;

export default App;
