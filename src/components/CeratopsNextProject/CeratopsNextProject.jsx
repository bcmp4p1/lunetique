import React from 'react';
import img1 from '@/assets/ceratops18.png';
import icon from '@/assets/h15.svg';

export const CeratopsNextProject = () => (
  <section className="ceratops-hightlights">
    <div className="ceratops-hightlights__background" />
    <div className="ceratops-hightlights__container">
      <div className="ceratops-hightlights__top">
        <img
          src={icon}
          alt="Next project"
          className="ceratops-hightlights__icon"
        />
        <p className="ceratops-hightlights__icon-title">NEXT PROJECT</p>
      </div>
      <img src={img1} alt="Next project" />
    </div>
  </section>
);
