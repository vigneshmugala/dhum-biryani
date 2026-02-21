import React from 'react';
import biryaniImg from '../images/pexels-satyam-verma-2901977-4439740.jpg';

export default function Hero(){
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div>
          <h1>Dhum Biryani</h1>
          <p className="lead">Slow-cooked Dum Biryani — rich aroma, tender meat, layered perfection.</p>
          <a className="cta" href="#contact">Order Now</a>
        </div>
        <div className="hero-visual">
          <img src= {biryaniImg} alt= "Dum Biryani"/>
        </div>
      </div>
    </section>
  )
}
