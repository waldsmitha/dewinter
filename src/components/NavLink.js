import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const ProjectsDropdown = () => {
  return (
    <StyledDropdown
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <Link to="/projects/architecturalelements">
        <li>architectural elements</li>
      </Link>
      <Link to="/projects/furniture">
        <li>furniture</li>
      </Link>
      <Link to="/projects/mirrors">
        <li>mirrors</li>
      </Link>
    </StyledDropdown>
  );
};

const OriginalsDropdown = () => {
  return (
    <StyledDropdown
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <Link to="/originalpieces/originalfurniture">
        <li>furniture</li>
      </Link>
      <Link to="/originalpieces/originalhomeaccents">
        <li>home accents</li>
      </Link>
      <Link to="/originalpieces/originalmirrors">
        <li>mirrors</li>
      </Link>
      <Link to="/originalpieces/originalsculptures">
        <li>sculptures</li>
      </Link>
    </StyledDropdown>
  );
};

const StyledDropdown = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 100%;
  position: absolute;
  white-space: nowrap;
  top: 100%;
  left: 0;
  background-color: #131313;
  z-index: 999;
  li {
    font-size: 1.5rem;
    text-transform: capitalize;
  }
`;

const NavLink = ({ item }) => {
  const location = useLocation();
  const { pathname } = location;
  const [dropdownActive, setDropdownActive] = useState(false);

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
        <li className="nav-element-title">{item.title}</li>
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
      {item.link === "projects" && dropdownActive && <ProjectsDropdown />}
      {item.link === "originalpieces" && dropdownActive && (
        <OriginalsDropdown />
      )}
    </motion.div>
  );
};

export default NavLink;
