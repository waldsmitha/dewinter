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
  // console.log(navLinks);

  return (
    <div>
      <StyledLinks>
        <ul>
          {navLinks.map((item) => (
            <Link key={item} to={item === "home" ? "/" : item}>
              <li>{item}</li>
              <motion.div
                className="line"
                transition={{
                  duration: 0.5,
                  ease: "linear",
                }}
                animate={{ width: pathname === `/${item}` ? "50%" : "0%" }}
              ></motion.div>
            </Link>
          ))}
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
      font-weight: 200;
      text-transform: uppercase;
    }

    .line {
      height: 0.5rem;
      background: ${theme.color.secondary};
      /* width: 0%; */
      /* transition: 0.2s; */
    }

    /* @media screen and (max-width: 768px) {
      .line {
        display: none;
      }
    } */

    /* a:hover {
      .line {
        width: 50%;
      }
    } */

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
