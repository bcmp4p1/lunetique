import React from 'react';
import img1 from '@/assets/ceratops18.png';
import icon from '@/assets/h15.svg';
import { Link } from 'react-router-dom';

export const CeratopsNextProject = () => (
  <section className="ceratops-hightlights">
    <div className="ceratops-hightlights__background" />
    <Link to="/sentinel" className="ceratops-hightlights__container">
      <div className="ceratops-hightlights__top">
        <img
          src={icon}
          alt="Next project"
          className="ceratops-hightlights__icon"
        />
        <p className="ceratops-hightlights__icon-title">NEXT PROJECT</p>
      </div>
      <img src={img1} alt="Next project" />
    </Link>
  </section>
);
