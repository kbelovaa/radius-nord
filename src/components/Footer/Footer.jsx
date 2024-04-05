import React from 'react';
import './Footer.scss';

const Footer = () => (
  <footer className="footer-section">
    <div className="container">
      <div className="footer">
        <span className="footer__text">Copyright © 2024 Radius Nord. All rights reserved</span>
        <div className="footer__text-wrap">
          <span className="footer__text">Terms of Use</span>
          <span className="footer__text">Cookies</span>
          <span className="footer__text">Privacy Policy</span>
          <span className="footer__text">Legal Notice</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
