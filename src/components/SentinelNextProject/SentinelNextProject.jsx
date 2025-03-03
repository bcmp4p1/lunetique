import React from 'react';
import icon from '@/assets/h15.svg';
import img1 from '@/assets/sentinel21.png';

export const SentinelNextProject = () => (
  <section className="sentinel-hightlights">
    <div className="sentinel-hightlights__background" />
    <div className="sentinel-hightlights__container">
      <div className="sentinel-hightlights__top">
        <img
          src={icon}
          alt="Next project"
          className="sentinel-hightlights__icon"
        />
        <p className="sentinel-hightlights__icon-title">NEXT PROJECT</p>
      </div>
      <img src={img1} alt="Next project" />
    </div>
  </section>
);
