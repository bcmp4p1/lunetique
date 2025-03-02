import React from 'react';
import './Slider.scss';
import turbo from '@/assets/turbo-logo.svg';
import market from '@/assets/market-logo.svg';

export const Slider = () => (
  <div className="slider">
    <div className="slider__fade slider__fade--left" />
    <div className="slider__track">
      <div className="slider__content">
        <img src={turbo} alt="Bunny" />
        <img src={market} alt="Marketing Dogs" />
        <img src={turbo} alt="TurboBoost" />
        <img src={market} alt="Sent" />

        <img src={turbo} alt="Bunny" />
        <img src={market} alt="Marketing Dogs" />
        <img src={turbo} alt="TurboBoost" />
        <img src={market} alt="Sent" />
      </div>
    </div>
    <div className="slider__fade slider__fade--right" />
  </div>
);
