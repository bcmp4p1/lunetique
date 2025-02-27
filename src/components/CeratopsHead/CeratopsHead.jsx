import React from 'react';
import logo from '@/assets/ceratops.png';
import designOne from '@/assets/ceratops1.png';

export const CeratopsHead = () => (
  <div className="ceratops__head">
    <div className="ceratops__head-container">
      <div className="ceratops__logo-container">
        <img src={logo} alt="logo" className="ceratops__logo" />
      </div>
      <h1 className="ceratops__title">
        <span className="ceratops__title--highlited">Ceratops</span>{' '}
        CryptoWallet
      </h1>
      <p className="ceratops__subtitle">Web Bunny — May 2024</p>
    </div>
    <div className="ceratops__head-content">
      <img
        src={designOne}
        alt="phones1"
        className="ceratops_image ceratops__image--one"
      />
      <div className="ceratops__head-box">
        <div className="ceratops__head-column">
          <div className="ceratops__head-article">
            <p className="ceratops__head-subtitle">My Role</p>
            <p>
              <span className="ceratops__head-text">Lead Product Designer</span>{' '}
              — User Research, Interaction Design, Visual Design, User Flows,
              Rapid Prototyping, Design Handoff.
            </p>
          </div>
          <div className="ceratops__head-article">
            <p className="ceratops__head-subtitle">Team</p>
            <p>Tobias Müller, Frontend Developer</p>
            <p>Leon Becker, Backend Developer</p>
            <p>Sophie Weber, Product Manager</p>
          </div>
          <div className="ceratops__head-article">
            <p className="ceratops__head-subtitle">Timeline & Status</p>
            <p>
              4 Months,{' '}
              <span className="ceratops__head-text">
                Secured funding in the second round
              </span>
            </p>
          </div>
        </div>
        <div className="ceratops__head-column">
          <div className="ceratops__head-article">
            <p className="ceratops__head-subtitle">Overview</p>
            <p>
              This is not a technical post or a tutorial. The web is full of
              great materials on how to design secure cryptocurrency wallets or
              customize user interfaces, written by professionals much smarter
              than me.
            </p>
            <p>
              It&#39;s about how we made the complex simple and easy to
              understand. understand. It&#39;s about how to create a product
              that doesn&#39;t scare you with novelty, but becomes a reliable
              companion. It&#39;s about choices that make financial management
              personal and safe.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
