import React from 'react';
import './footer.scss';
import logo from '../../assets/logo.svg';
import lines from '../../assets/lines.svg';
import dots from '../../assets/dots.svg';
import arrow from '../../assets/arrow-right.svg';
import extendedLogo from '../../assets/extended-logo.svg';

export function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="" />
      <img className="footer__lines" src={lines} alt="" />
      <img className="footer__dots" src={dots} alt="" />
      <div className="footer__middle">
        <div className="footer__logo-by">
          <img src={extendedLogo} alt="" />
          <span className="footer__motto">“Dreams are born under the moon...”</span>
        </div>
        <div className="footer__links">
          <div className="footer__link">
            <span className="footer__text">Contact</span>
            <img src={arrow} alt="" />
          </div>
          <div className="footer__link">
            <span className="footer__text">LinkedIn</span>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__text">© 2025 Lunétique. All Rights Reserved</p>
      </div>
    </footer>
  );
}
