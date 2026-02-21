import React from 'react';

export default function About(){
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">What is Dum Biryani?</h2>
        <p className="muted">Dum Biryani is a traditional slow-cooked rice and meat dish where spices and steam are trapped in a sealed pot (the "dum") to infuse deep flavors. Our rendition balances fragrant basmati, saffron, and marinated meat for a memorable meal.</p>
        <div className="two-col">
          <div>
            <h3>Speciality</h3>
            <p>We use long-grain basmati, layered with hand-ground masalas and marinated overnight. The dum process seals in juices and aroma for a melt-in-your-mouth texture.</p>
          </div>
          <div>
            <h3>Why we're great</h3>
            <p>From ingredient sourcing to controlled slow-cooking, every step is tuned to preserve aroma and texture. No shortcuts, no preservatives — just traditional craft.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
