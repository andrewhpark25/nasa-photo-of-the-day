import React, { useState } from "react";
import PhotoPage from "./components/PhotoContainer/PhotoPage";
import NasaHeader from "./components/PhotoContainer/NasaHeader";
import "./App.css";

function App() {
  return (
    <div className="App">
     <NasaHeader />
     <PhotoPage />
    </div>
  );
}

export default App;
