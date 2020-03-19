import React, { useState } from "react";
import styled from "styled-components";


const NasaPhoto = styled.div`
 
 height: 1200px;
 width: 1200px;
 margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family:Ubuntu;
  margin-top: 30px;

`;

const NasaImage = styled.img`
width: 780px;
height: 438px;
`
const Explanation = styled.p`
text-align:justify;
width: 780px;
margin-top:30px;
line-height:20px;
text-indent:2em;
font-size:18px;
`

const Copyright = styled.p`

margin-left:-500px;
color:gray;
font-weight:bold;
`

const Title = styled.h2`
font-weight:bold;
`

const Photo = props => {
  
    return (
        <NasaPhoto>
        <Title>{props.title}</Title>
        <Copyright>By {props.copyright} </Copyright>
        <NasaImage alt="image" src={props.hdurl} />
        <Explanation>{props.explanation}</Explanation>
      </NasaPhoto>
    );
  };
  
  export default Photo;
