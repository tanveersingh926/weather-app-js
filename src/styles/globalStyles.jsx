import { createGlobalStyle } from "styled-components";
import bgImg from "../assets/img/background-image.jpeg";

export const GlobalStyle = createGlobalStyle`

  body {
    background: #492d02;
    background: -webkit-linear-gradient(to bottom, #242424, #492d02);   
    background: linear-gradient(to bottom, #242424, #492d02); 
    background: linear-gradient(to bottom, #242424, #492d02); 
    background-image:url(${bgImg}) ;
    background-size: cover;
    font-family: 'Nunito', sans-serif;
    color:#fff;

  }
  * {
    box-sizing:border-box ;
  }
  

`;
