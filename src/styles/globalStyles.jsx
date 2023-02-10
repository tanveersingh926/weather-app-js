import React from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import bgImg from "../assets/img/background-image.jpeg";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
  body {
    /* background-color: ${(props) => props.theme.colors.secondary}; */
    /* background-image: url("https://source.unsplash.com/1600x900/?Clouds,night,dark"); */
    /* background-size: cover; */
  //  background: #7F00FF;  /* fallback for old browsers */
  /* background: -webkit-linear-gradient(to bottom, #E100FF, #7F00FF);   */
    // background: linear-gradient(to bottom, #E100FF, #7F00FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
//    background: linear-gradient(to bottom, #9d00ff, #7F00FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    background-image: url(${bgImg});
    background-size: cover;
    font-family: 'Nunito', sans-serif;
    color:#fff;

  }
  * {
    box-sizing:border-box ;
  }
  

`;
