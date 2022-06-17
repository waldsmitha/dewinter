import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

//Animations
import { AnimatePresence } from "framer-motion";

const ProjectsDropdown = ({ setDropdownActive, pathname }) => {
  const data = [
    {
      title: "architectural elements",
      link: "/projects/architecturalelements",
    },
    {
      title: "furniture",
      link: "/projects/furniture",
    },
    {
      title: "mirrors",
      link: "/projects/mirrors",
    },
  ];

  return (
    <StyledDropdown
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      // style={{ background: pathname == "/about" ? "#BFBFBF" : "#252525" }}
    >
      {data.map((datum) => (
        <Link to={datum.link} key={datum.link}>
          <motion.li onClick={() => setDropdownActive(false)}>
            {datum.title}
          </motion.li>
        </Link>
      ))}
    </StyledDropdown>
  );
};

const OriginalsDropdown = ({ setDropdownActive, pathname }) => {
  const data = [
    {
      title: "furniture",
      link: "/originalpieces/originalfurniture",
    },
    {
      title: "home accents",
      link: "/originalpieces/originalhomeaccents",
    },
    {
      title: "mirrors",
      link: "/originalpieces/originalmirrors",
    },
    {
      title: "sculptures",
      link: "/originalpieces/originalsculptures",
    },
  ];

  return (
    <StyledDropdown
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      // style={{ background: pathname == "/about" ? "#BFBFBF" : "#252525" }}
    >
      {data.map((datum) => (
        <Link to={datum.link} key={datum.link}>
          <motion.li onClick={() => setDropdownActive(false)}>
            {datum.title}
          </motion.li>
        </Link>
      ))}
    </StyledDropdown>
  );
};

const StyledDropdown = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;
  position: absolute;
  white-space: nowrap;
  top: 100%;
  left: 0;
  background-color: #252525;
  z-index: 999;
  border-radius: 5px;

  li {
    font-size: 1.5rem;
    text-transform: capitalize;
    margin: 0 1rem;
    padding: 0.5rem 0;
    transition: 0.1s;
    text-transform: uppercase;
  }
  li:hover {
    color: #db9731;
  }
`;

const NavLink = ({ item }) => {
  const location = useLocation();
  const { pathname } = location;
  const [dropdownActive, setDropdownActive] = useState(false);
  console.log(item.link);

  return (
    <motion.div
      className="pos-relative"
      onHoverStart={(e) => {
        setDropdownActive(true);
      }}
      onHoverEnd={(e) => {
        setDropdownActive(false);
      }}
    >
      <Link key={item.title} to={item.link}>
        <div className="nav-element-title">
          <li>{item.title}</li>
          {item.title === "projects" && (
            <motion.div
              className="drop-down-icon"
              animate={{ rotate: dropdownActive ? 180 : 0 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
            ></motion.div>
          )}
          {item.title === "original pieces" && (
            <motion.div
              className="drop-down-icon"
              animate={{ rotate: dropdownActive ? 180 : 0 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
            ></motion.div>
          )}
        </div>
        <motion.div
          className="line"
          transition={{
            duration: 0.5,
            ease: "linear",
          }}
          animate={{
            width: pathname.split("/")[1] === `${item.link}` ? "50%" : "0%",
          }}
        ></motion.div>
      </Link>
      <AnimatePresence exitBeforeEnter>
        {item.link === "projects" && dropdownActive && (
          <ProjectsDropdown
            setDropdownActive={setDropdownActive}
            pathname={pathname}
          />
        )}
        {item.link === "originalpieces" && dropdownActive && (
          <OriginalsDropdown
            setDropdownActive={setDropdownActive}
            pathname={pathname}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NavLink;
