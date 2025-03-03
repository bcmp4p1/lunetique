import React from 'react';
import './SentinelHead.scss';
import img1 from '@/assets/sentinel1.png';
import img2 from '@/assets/sentinel2.png';

export const SentinelHead = () => (
  <div className="sentinel-head">
    <div className="sentinel-head__title">
      <p className="sentinel-head__title-up">
        Sentinel — <span>Browser Extension</span>
      </p>
      <p className="sentinel-head__title-bottom">Freelance — December 2024</p>
    </div>
    <img src={img1} alt="" className="sentinel-head__img" />
    <img src={img2} alt="" className="sentinel-head__img" />
    <div className="sentinel-head__description">
      <div className="sentinel-head__left">
        <div className="sentinel-head__point">
          <p className="sentinel-head__point-up">My Role</p>
          <p>
            <span>Lead Product Designer</span> — Web & Extension Design, User
            Research, Interaction & Visual Design, Prototyping, Design Handoff.
          </p>
        </div>
        <div className="sentinel-head__point">
          <p className="sentinel-head__point-up">Team</p>
          <p>Me & James Wilson, Developer</p>
        </div>
        <div className="sentinel-head__point">
          <p className="sentinel-head__point-up">Timeline & Status</p>
          <p>
            2 Months,{' '}
            <span>Ongoing development with active testing and iteration</span>
          </p>
        </div>
      </div>
      <div className="sentinel-head__right">
        <p>Overview</p>
        <div className="sentinel-head__right-text">
          <p>
            Sentinel is a browser extension designed to enhance security in the
            web3 space. As decentralized technologies grow, users face
            increasing risks of scams, phishing attacks, and malicious smart
            contracts. Sentinel helps mitigate these threats by providing
            real-time alerts, transaction analysis, and security insights
            directly within the browser.
          </p>
          <p>
            The goal is to create a seamless and intuitive experience that
            empowers users to navigate the decentralized world safely.
          </p>
        </div>
      </div>
    </div>
  </div>
);
