import React from 'react';

export default function Contact(){
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Visit Our Store</h2>
        <p className="muted">12 Biryani Street, Banjara Hills, Hyderabad, 500034</p>
        <div className="map">
          <iframe title="store-map" width="100%" height="100%" frameBorder="0" style={{border:0}} src="https://www.google.com/maps?q=17.4139,78.4390&z=15&output=embed" allowFullScreen />
        </div>

        <h3 style={{marginTop:16}}>Why our biryani is better</h3>
        <div className="benefits-grid">
          <div className="benefit">
            <span className="icon" aria-hidden>🌶️</span>
            <div>
              <strong>Whole spices</strong>
              <div className="muted">Freshly ground in small batches for maximum aroma</div>
            </div>
          </div>
          <div className="benefit">
            <span className="icon" aria-hidden>🕒</span>
            <div>
              <strong>Slow marination</strong>
              <div className="muted">Overnight marination ensures deep flavor penetration</div>
            </div>
          </div>
          <div className="benefit">
            <span className="icon" aria-hidden>🔥</span>
            <div>
              <strong>Traditional dum</strong>
              <div className="muted">Temperature-controlled dum sealing for perfect texture</div>
            </div>
          </div>
          <div className="benefit">
            <span className="icon" aria-hidden>🍽️</span>
            <div>
              <strong>Artful plating</strong>
              <div className="muted">Served with garnishes and generous portions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
