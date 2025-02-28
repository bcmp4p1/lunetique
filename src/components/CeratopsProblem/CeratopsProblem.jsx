import React from 'react';
import './CeratopsProblem.scss';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';

export const CeratopsProblem = () => (
  <div className="ceratops-problem">
    <SectionTitle
      title="The Hidden Problems No One Talks About."
      section="The Problem"
      isStar
    />
    <div className="ceratops-context__top">
      <p className="ceratops-context__title">
        Uncovering the Real Pain Points.
      </p>
      <div className="ceratops-context__container">
        <p>
          Traditional wallets are too complicated for newcomers and too slow for
          experienced users. Confusing interfaces and security concerns create
          barriers that hinder the crypto experience, leaving many frustrated
          and overwhelmed.
        </p>
      </div>
    </div>
    <div className="ceratops-problem__points">
      <div className="ceratops-problem__point">
        <img src="" alt="" className="ceratops-problem__point-image" />
        <p>
          <span className="text-white">2312</span>
        </p>
      </div>
    </div>
  </div>
);
