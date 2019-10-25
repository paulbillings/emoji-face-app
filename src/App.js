import React from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <ImageLinkForm />
      {/*<FaceRecognition />*/}
    </div>
  );
}


export default App;