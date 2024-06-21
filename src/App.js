import React from 'react';
import './App.css';
import  Socials from './components/socials';
import Foto from './components/images/mainfoto.png';
import Footer from './components/footer';

function App() {

  return (
    <div>
    <div className="Background"></div>
    <div className="Backgroundfoto" ></div>
    <div className="App">
      <div className="Photo">
        <img className="Foto" src={Foto} alt="Grupo Tempestad" />
      </div>
      <div className="Text">
        <h1>Bouquets By Jessica</h1>
        <p>Las Vegas, NV</p>
      </div>
      <div className="Social">
      <Socials />
      </div>
      <Footer />
    </div>
    </div>
  );
}

export default App;

