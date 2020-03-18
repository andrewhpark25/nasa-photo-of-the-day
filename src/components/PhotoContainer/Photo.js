import React, { useState } from "react";

const Photo = props => {
  
    return (
        <div className="photo">
        <h2>{props.title}</h2>
        <img className="nasa-image" alt="image" src={props.hdurl} />
        <p>Copyright by {props.copyright} </p>
        <p>{props.explanation}</p>
      </div>
    );
  };
  
  export default Photo;
  