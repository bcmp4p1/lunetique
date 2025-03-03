import React from 'react';
import './Slider.scss';
import turbo from '@/assets/turbo-logo.svg';
import market from '@/assets/market-logo.svg';
import bunny from '@/assets/bunny-logo.svg';
import sentinel from '@/assets/sentinel-logo.svg';

export const Slider = () => (
  <div className="slider">
    <p>Experience working with the best minds on the planet</p>
    <div className="slider__fade slider__fade--left" />
    <div className="slider__track">
      <div className="slider__content">
        <img src={bunny} alt="Bunny" />
        <img src={market} alt="Marketing Dogs" />
        <img src={turbo} alt="TurboBoost" />
        <img src={sentinel} alt="Sent" />

        <img src={bunny} alt="Bunny" />
        <img src={market} alt="Marketing Dogs" />
        <img src={turbo} alt="TurboBoost" />
        <img src={sentinel} alt="Sent" />
      </div>
    </div>
    <div className="slider__fade slider__fade--right" />
  </div>
);
