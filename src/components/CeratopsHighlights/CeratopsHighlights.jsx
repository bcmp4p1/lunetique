import React from 'react';
import './CeratopsHighlights.scss';
import icon from '@/assets/highlights.svg';
import imageOne from '@/assets/ceratops2.png';
import imageTwo from '@/assets/ceratops3.png';
import imageThree from '@/assets/ceratops4.png';
import imageFour from '@/assets/ceratops5.png';
import { CaseImage } from '@/components/CaseImage/CaseImage';

export const CeratopsHighlights = () => (
  <section className="ceratops-hightlights" id="highlights">
    <div className="ceratops-hightlights__background" />
    <div className="ceratops-hightlights__container">
      <div className="ceratops-hightlights__top">
        <img
          src={icon}
          alt="HIGHLIGHTS"
          className="ceratops-hightlights__icon"
        />
        <p className="ceratops-hightlights__icon-title">HIGHLIGHTS</p>
      </div>
      <p className="ceratops-hightlights__text">
        Building for Real Needs. Research-driven design that respects both
        beginners’ curiosity and experts’ efficiency—ensuring clarity, control,
        and security without unnecessary complexity.
      </p>
      <CaseImage
        image={imageOne}
        title="Cryptocurrency wallet interpretation"
        number="0.1"
        height="584"
      />
    </div>
    <CaseImage
      image={imageTwo}
      title="Send tokens screens"
      number="0.2"
      height="800"
    />
    <CaseImage
      image={imageThree}
      title="Token info screen"
      number="0.3"
      height="860"
    />
    <CaseImage
      image={imageFour}
      title="Token exchange tray system"
      number="0.4"
      height="800"
    />
  </section>
);
