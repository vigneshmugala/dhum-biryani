import React, {useState} from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function closeMenu(){ setOpen(false); }

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <div className="brand">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-icon">
            <circle cx="12" cy="12" r="9" fill="#f6ae2d" />
            <path d="M8 11c1.2-1.6 3.6-2 5-1 1.6 1.2 1.8 3.2 1 4" stroke="#7a2e0b" strokeWidth="0.9" strokeLinecap="round" />
            <path d="M7.5 8.5c1-0.8 3-1 4.5-0.5" stroke="#7a2e0b" strokeWidth="0.8" strokeLinecap="round" />
          </svg>
          <span className="brand-text">Dhum Biryani</span>
        </div>

        <button className={`burger ${open? 'open':''}`} aria-label="Menu" onClick={()=>setOpen(s=>!s)}>
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${open? 'open':''}`} onClick={closeMenu}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#types">Types</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      {open && <div className="mobile-backdrop" onClick={closeMenu} />}
    </nav>
  );
}
