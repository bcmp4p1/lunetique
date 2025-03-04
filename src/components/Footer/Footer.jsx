import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import dots from '../../assets/dots.svg';
import arrow from '../../assets/arrow-right.svg';
import extendedLogo from '../../assets/extended-logo.svg';

export function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="" />
      <img className="footer__dots" src={dots} alt="" />
      <div className="footer__line" />
      <div className="footer__middle">
        <div className="footer__glow-container">
          <div className="footer__glow" />
        </div>
        <Link to="/" className="footer__logo-by">
          <img src={extendedLogo} alt="" />
          <span className="footer__motto">
            “Dreams are born under the moon...”
          </span>
        </Link>
        <div className="footer__links">
          <a
            href="mailto:Lunetique.studio@gmail.com"
            target="_blank"
            className="footer__link"
            rel="noreferrer"
          >
            <span className="footer__text">Contact</span>
            <img src={arrow} alt="arrow" />
          </a>
          <a
            href="https://linkedin.com/in/lunétique"
            target="_blank"
            className="footer__link"
            rel="noreferrer"
          >
            <span className="footer__text">LinkedIn</span>
            <img src={arrow} alt="arrow" />
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__text">© 2025 Lunétique. All Rights Reserved</p>
      </div>
    </footer>
  );
}
