import React from "react";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

//Styles
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

//Media
import white_small_badge from "../media/white_small_badge.png";

const NavLinksComponent = ({ navLinks }) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div>
      <StyledLinks>
        <ul className={pathname === "/" ? "" : "not-home"}>
          {navLinks.map((item) => (
            <Link key={item} to={item === "home" ? "/" : item}>
              <li>{item}</li>
            </Link>
          ))}
          <Link to="/">
            <img src={white_small_badge} alt="" />
          </Link>
        </ul>
      </StyledLinks>
    </div>
  );
};

const StyledLinks = styled(motion.div)`
  ${({ theme }) => css`
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100vw;
      max-width: ${theme.spacing.maxWidth};
      a {
        cursor: pointer;
      }
      a:first-child {
        li {
          padding-left: 0;
        }
      }
      a:nth-child(4) {
        li {
          padding-right: 0;
          text-align: right;
        }
      }
    }
    li {
      /* padding: 0 5rem; */
      font-weight: 200;
      text-transform: uppercase;
      width: 100px;
    }

    img {
      height: 10rem;
    }

    .not-home {
      a:nth-child(3) {
        order: 1;
      }
      a:nth-child(4) {
        order: 2;
      }
    }
  `}
`;

export default NavLinksComponent;
