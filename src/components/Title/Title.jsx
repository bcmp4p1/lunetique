import './Title.scss';
import arrow from '@/assets/arrow right.svg';
import star from '@/assets/star-white.svg';
import { Slider } from '@/components/Slider/Slider';
import React from 'react';

export const Title = () => (
  <div className="title">
    <div className="title__up">
      <img src={star} alt="" />
      <p>Functional brilliance</p>
    </div>
    <div className="title__title">
      <p className="title__title1">Design Boutique</p>
      <p className="title__title2">of Digital Excellence</p>
    </div>
    <div className="title__text">
      <p>
        From creative web aesthetics to shaping high-converting digital
        products. Focused on SaaS, AI & Web3 Products.
      </p>
    </div>
    <button className="transform__button">
      <a
        href="mailto:Lunetique.studio@gmail.com"
        target="_blank"
        className="transform__circle"
        rel="noreferrer"
      >
        <p>Contact me</p>
        <img src={arrow} alt="" />
      </a>
    </button>

    <Slider />
  </div>
);
