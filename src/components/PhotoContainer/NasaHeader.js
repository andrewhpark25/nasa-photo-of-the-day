import React from 'react';
  import styled from "styled-components";
  
  const Header = styled.header`
  border-bottom: 1px solid lightgray;
  display:flex;
flex-direction:row;
justify:flex-start;
font-family: Ubuntu;
  `
  const Logo = styled.img`
width:100px;
height:100%;
  `

function NasaHeader() {
    return (
      
        <Header>
               <Logo src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"></Logo>
        <h1>NASA Photo of the Day</h1>
      </Header>
   
    )
  }

  export default NasaHeader; 