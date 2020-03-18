
import React, { useState, useEffect } from "react";
import Photo from "./Photo";
import axios from "axios";

// import data 

export default function PhotoPage() {
 
    const [photo, setPhoto] = useState([]);
     
    useEffect(() => {
        axios
          .get(`https://api.nasa.gov/planetary/apod?api_key=wStCohnfDSQzxxRyuFUKhgSvrSa5iFfTQCxNN3Aj`)
          .then(response => {
            console.log(response.data);
            setPhoto(response.data);
          })
          .catch(error => {
            console.log("the data was not returned", error);
          });
      }, []);


  return (
    <div className="photo-container-wrapper">
      
     
           {
            <Photo title={photo.title} hdurl={photo.hdurl} copyright={photo.copyright} explanation={photo.explanation}/>
            
          }
    </div>
  );
};



