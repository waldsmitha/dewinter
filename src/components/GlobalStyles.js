import { createGlobalStyle } from "styled-components";
import background from "../media/background-blurred.png";
import backgroundWhite from "../media/background-blurred-white.png";

let h1 = `calc(2rem + 3vw)`;
let h2 = `calc(1.25rem + 1.5vw)`;
let h3 = `calc(1rem + 2vw)`;
let h4 = `calc(1rem + 1.5vw)`;
let p = `calc(1.8rem + .25vw)`;
let li = `calc(1.3rem + .25vw)`;

const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding:0;
}

html {
    font-size: 62.5%;
}

a {
    color: #FFFDF6;
    text-decoration: none;
}

.bg-white a {
    color: #101010;
}


h1, h2, h3 {
    letter-spacing: 1px;
}
h1 {
    font-size: ${h1};
    font-size: clamp(2.25rem, 5vw, 6rem);
    /* font-size: 130px; */
    line-height: 100%;
    font-weight: 300;
}
h2 {
    font-size: ${h2};
    font-size: clamp(2.5rem, 3vw, 4rem);
    /* font-size: 72px; */
    line-height: 100%;
    font-weight: 300;
}
h3 {
    font-size: ${h3};
}
h4 {
    font-size: ${h4};
}
p {
    font-size: ${p};
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 1px;
}

li {
    font-size: ${li};
    list-style: none;
    font-size: 20px;
    
}

button {
    font-size: ${h2};
}


body {
    /* font-family: 'Gothic A1', sans-serif; */
    /* font-family: 'Gowun Batang', serif; */
    // font-family: 'Cormorant Garamond', serif;
    font-family: "bonvoyage", serif;

    font-weight: 300;
    height: 100%;
    overflow: scroll;
    overflow-x: hidden;
    background: url(${background}) no-repeat center center fixed; 
    background-size: cover;
    transition: .2s;
}

.bg-white {
    background: url(${backgroundWhite}) no-repeat center center fixed; 
    background-size: cover;
    color: #101010;
}
html {
    color: #FFFDF6;
    height: 100%; 
    /* overflow-x: hidden; */
    

}

.grid {
    display: grid;
}
.pos-relative {
    position: relative;
}

`;

export default GlobalStyles;
