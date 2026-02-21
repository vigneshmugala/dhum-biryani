import React from 'react';

export default function Types(){
  return (
    <section id="types" className="section types-section">
      <div className="container">
        <h2 className="section-title">Types of Dum Biryani</h2>
        <div className="cards">
          <div className="card card-clove">
            <span className="decoration dec-clove" aria-hidden="true">🌿</span>
            <h4>Hyderabadi</h4>
            <p>Layered dum cooked sealed with dough — intense spices, saffron, and a robust aroma. Typically made with goat or chicken and finished with ghee and fried onions.</p>
          </div>
          <div className="card card-leaf">
            <span className="decoration dec-leaf" aria-hidden="true">🍃</span>
            <h4>Lucknowi (Awadhi)</h4>
            <p>Delicately spiced and slow-cooked using the dum method with subtle notes of rose and kewra; refined and aromatic.</p>
          </div>
          <div className="card card-chicken">
            <span className="decoration dec-chicken" aria-hidden="true">🍗</span>
            <h4>Calcutta</h4>
            <p>Regional variant with lightly spiced rice, potatoes, and a hint of sweetness — a colonial-era fusion favorite.</p>
          </div>
          <div className="card card-spice">
            <span className="decoration dec-spice" aria-hidden="true">🧂</span>
            <h4>Ambur / Tamil-style</h4>
            <p>South Indian style with distinct spice blends and often served with raita and salan.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
