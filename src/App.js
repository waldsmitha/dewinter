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
import ProjectDetailed from "./components/ProjectDetailed";

//Animations
import { AnimatePresence } from "framer-motion";

//Media
import wmb from "./media/white_medium_badge.png";

function App() {
  const location = useLocation();
  const pathname = location.pathname;
  const [navActive, setNavActive] = useState(true);
  const [navLinks, setNavLinks] = useState([
    { title: "about", link: "about" },
    { title: "projects", link: "projects" },
    { title: "original pieces", link: "originalpieces" },
    { title: "services", link: "services" },
    { title: "contact", link: "contact" },
  ]);

  return (
    <StyledApp>
      <Theme>
        <div className="wrapper">
          <NavBar pathname={pathname} navLinks={navLinks} />
          <MobileHeader pathname={pathname} />
          <MobileNavMenu
            navActive={navActive}
            setNavActive={setNavActive}
            navLinks={navLinks}
          />
          <Link to="/" className={pathname === '/about' ? 'inverted logo' : 'logo'}>
            <img src={wmb} alt="" />
          </Link>
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route exact path="/" element={<Home navLinks={navLinks} />} />
              <Route path="/projects" element={<Commissions />} />
              <Route
                path="/projects/:id"
                element={<ProjectDetailed pathname={pathname} />}
              />
              <Route path="/originalpieces" element={<Originals />} />
              <Route
                path="/originalpieces/:id"
                element={<ProjectDetailed pathname={pathname} />}
              />
              <Route path="/services" element={<Process />} />
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

  // width: 100vw;
  /* overflow-x: hidden; */
  color: #fffdf6;

  .logo {
    z-index: 100;
    position: fixed;
    top: 1rem;
    left: 1rem;

    img {
      height: 80px;
    }
    z-index: 1000;
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
