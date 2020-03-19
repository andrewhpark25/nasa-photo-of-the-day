
import React, { useState, useEffect } from "react";
import {Alert} from 'reactstrap';
import styled from "styled-components";

const PhotoButton = styled.button`
 
`;


export default function Button() {

    const [show, setShow] = useState(true);

    
    if(show) {
        return (
          
          <Alert show={show} variant="success">
          <Alert.Heading>How's it going?!</Alert.Heading>
          </Alert>
        )
      }
return (
    <div class="button">
      <PhotoButton primary="true" onClick={() => setShow(true)}>
        Next
      </PhotoButton>
      </div>
)
}