import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const ProjectsDropdown = ({ setDropdownActive }) => {
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
      transition={{ duration: 0.2 }}
    >
      {data.map((datum) => (
        <Link to={datum.link}>
          <motion.li onClick={() => setDropdownActive(false)}>
            {datum.title}
          </motion.li>
        </Link>
      ))}
    </StyledDropdown>
  );
};

const OriginalsDropdown = ({ setDropdownActive }) => {
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
      transition={{ duration: 0.2 }}
    >
      {data.map((datum) => (
        <Link to={datum.link}>
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
  background-color: #131313;
  z-index: 999;
  li {
    font-size: 1.5rem;
    text-transform: capitalize;
    margin: 0 1rem;
    padding: 0.5rem 0;
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
      {item.link === "projects" && dropdownActive && (
        <ProjectsDropdown setDropdownActive={setDropdownActive} />
      )}
      {/* {item.link === "projects" && <ProjectsDropdown />} */}
      {item.link === "originalpieces" && dropdownActive && (
        <OriginalsDropdown setDropdownActive={setDropdownActive} />
      )}
    </motion.div>
  );
};

export default NavLink;
