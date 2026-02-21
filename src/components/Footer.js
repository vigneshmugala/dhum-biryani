import React from 'react';

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Dhum Biryani</div>
        <div>Made with ❤️ — The finest Dum Biryani experience</div>
      </div>
    </footer>
  )
}
