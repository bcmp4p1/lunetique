import React from 'react';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import img1 from '@/assets/ceratops18.png';
import { CaseImage } from '@/components/CaseImage/CaseImage';
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
        <p className="ceratops-hightlights__icon-title">NEX PROJECT</p>
      </div>
      <CaseImage image={img1} height="720" />
    </div>
  </section>
);
