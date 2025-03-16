import React from 'react';
import './SentinelProblem.scss';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import h16 from '@/assets/h16.svg';
import img9 from '@/assets/sentinel9.png';
import img10 from '@/assets/sentinel10.png';
import { CaseImage } from '@/components/CaseImage/CaseImage';

export const SentinelProblem = () => (
  <div className="sentinel-problem" id="s-problem">
    <SectionTitle
      title="Web3 - Wild West? Here's the problem!"
      section="The Problem"
      isStar
    />
    <div className="sentinel-problem__top">
      <p className="sentinel-problem__title">
        Why Web3 security is a necessity, not an option.
      </p>
      <div className="sentinel-problem__container">
        <p>
          Web3 offers tremendous opportunities, but with them come risks. Every
          day thousands of users fall victim to phishing attacks, fake smart
          contracts, and token theft. One wrong click is enough to lose access
          to your assets forever.
        </p>
        <p>
          One of the most common causes of asset loss in Web3 is stealthy
          permissions that users sign without looking. You click “Continue”
          thinking you&#39;re just confirming a transaction, but you&#39;re
          actually giving attackers full access to your NFTs and tokens.
        </p>
      </div>
    </div>
    <CaseImage
      image={img9}
      title="CTA banner from a website"
      height="432"
      number="1.0"
    />
    <div className="sentinel-problem__box">
      <p>What&#39;s wrong with current solutions?</p>
      <div className="sentinel-problem__point">
        <img src={h16} alt="" className="sentinel-problem__point-image" />
        <p className="text-white">
          Outdated Security Fails Web3.{' '}
          <span className="text-grey">
            Existing antivirus and browser defenses simply can&#39;t keep up
            with Web3 threats. Classic security tools can&#39;t recognize
            dynamic rogue sites, malicious smart contracts and fake NFT
            marketplaces.
          </span>
        </p>
      </div>
    </div>
    <CaseImage
      image={img10}
      title="Pop-up window with phishing site detection"
      height="800"
      number="1.1"
    />
  </div>
);
