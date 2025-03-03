import React from 'react';
import './SentinelHighlights.scss';
import icon from '@/assets/highlights.svg';
import img3 from '@/assets/sentinel3.png';
import img4 from '@/assets/sentinel4.png';
import img5 from '@/assets/sentinel5.png';
import img6 from '@/assets/sentinel6.png';
import img7 from '@/assets/sentinel7.png';
import img8 from '@/assets/sentinel8.png';
import { CaseImage } from '@/components/CaseImage/CaseImage';

export const SentinelHighlights = () => (
  <section className="sentinel-hightlights">
    <div className="sentinel-hightlights__background" />
    <div className="sentinel-hightlights__container">
      <div className="sentinel-hightlights__top">
        <img
          src={icon}
          alt="HIGHLIGHTS"
          className="sentinel-hightlights__icon"
        />
        <p className="sentinel-hightlights__icon-title">
          HIGHLIGHTS AT A GLANCE
        </p>
      </div>
      <p className="sentinel-hightlights__text">
        Sentinel is a browser extension for web3 security. It helps users
        protect themselves from fraud and various threats in the decentralized
        environment.
      </p>
      <CaseImage
        image={img3}
        title="Hero section of the website"
        number="0.1"
        height="918"
      />
    </div>
    <CaseImage
      image={img4}
      title="Full-fledged website"
      number="0.2"
      height="918"
    />
    <CaseImage
      image={img5}
      title="Pop-ups directly from the extension"
      number="0.3"
      height="918"
    />
    <CaseImage
      image={img6}
      title="Mobile mobile version"
      number="0.4"
      height="918"
    />
    <CaseImage
      image={img7}
      title="Transaction Simulator"
      number="0.5"
      height="918"
    />
    <CaseImage
      image={img8}
      title="Transaction simulator directly on the site"
      number="0.6"
      height="918"
    />
  </section>
);
