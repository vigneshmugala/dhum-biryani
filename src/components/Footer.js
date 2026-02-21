import React from 'react';

export default function Footer(){
  return (
    <footer className="site-footer footer-enhanced">
      <div className="container footer-inner">
        <div className="footer-left">
          <div className="brand-small">Dhum Biryani</div>
          <div className="muted">© {new Date().getFullYear()} — All rights reserved</div>
        </div>
        <div className="footer-right">
          <div>Follow us</div>
          <div className="socials">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
