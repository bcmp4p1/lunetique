import React from 'react';
import './CeratopsProblem.scss';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import h1 from '@/assets/h1.svg';
import h2 from '@/assets/h2.svg';
import h3 from '@/assets/h3.svg';
import h4 from '@/assets/h4.svg';
import h5 from '@/assets/h5.svg';
import h6 from '@/assets/h6.svg';
import h7 from '@/assets/h7.svg';
import h8 from '@/assets/h8.svg';
import img1 from '@/assets/ceratops8.png';
import icon from '@/assets/challenge.svg';
import { CaseImage } from '@/components/CaseImage/CaseImage';

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
        <img src={h1} alt="" className="ceratops-problem__point-image" />
        <p className="text-white">
          Guidance Gaps.{' '}
          <span className="text-grey">
            New users often feel lost navigating through complex wallet
            functions.
          </span>
        </p>
      </div>
      <div className="ceratops-problem__point">
        <img src={h2} alt="" className="ceratops-problem__point-image" />
        <p className="text-white">
          Overwhelming Interface.{' '}
          <span className="text-grey">
            The complexity of traditional wallets hinders smooth user
            experience.
          </span>
        </p>
      </div>
      <div className="ceratops-problem__point">
        <img src={h3} alt="" className="ceratops-problem__point-image" />
        <p className="text-white">
          Security Concerns.{' '}
          <span className="text-grey">
            Ensuring the secure storage and management of sensitive data.
          </span>
        </p>
      </div>
      <div className="ceratops-problem__point">
        <img src={h4} alt="" className="ceratops-problem__point-image" />
        <p className="text-white">
          Security Concerns.{' '}
          <span className="text-grey">
            Ensuring the secure storage and management of sensitive data.
          </span>
        </p>
      </div>
    </div>
    <div className="ceratops-problem__block">
      <div className="ceratops-problem__background" />
      <div className="ceratops-problem__container">
        <div className="ceratops-problem__top">
          <img src={icon} alt="CHALLENGE" className="ceratops-problem__icon" />
          <p className="ceratops-problem__icon-title">THE CHALLENGE</p>
        </div>
        <p className="ceratops-problem__text">
          Create a crypto wallet that balances simplicity for beginners with
          advanced features for experienced users, all while ensuring top-notch
          security and seamless transactions.
        </p>
      </div>
    </div>
    <div className="ceratops-problem__principles">
      <div className="ceratops-context__title">
        <p>North Star design principles:</p>
      </div>
      <div className="ceratops-problem__points2">
        <div className="ceratops-problem__point2">
          <div className="ceratops-problem__point2text">
            <img src={h5} alt="" className="ceratops-problem__point-image" />
            <p className="text-white">Simplicity at Core</p>
          </div>
          <p className="text-grey">
            Intuitive design for all users, no matter their experience.
          </p>
        </div>
        <div className="ceratops-problem__point2">
          <div className="ceratops-problem__point2text">
            <img src={h6} alt="" className="ceratops-problem__point-image" />
            <p className="text-white">Powerful Flexibility</p>
          </div>
          <p className="text-grey">
            Advanced features for experts without complexity.
          </p>
        </div>
        <div className="ceratops-problem__point2">
          <div className="ceratops-problem__point2text">
            <img src={h7} alt="" className="ceratops-problem__point-image" />
            <p className="text-white">Uncompromised Security</p>
          </div>
          <p className="text-grey">
            Top-level security with seamless access and intuitive management.
          </p>
        </div>
        <div className="ceratops-problem__point2">
          <div className="ceratops-problem__point2text">
            <img src={h8} alt="" className="ceratops-problem__point-image" />
            <p className="text-white">Speed and Efficiency</p>
          </div>
          <p className="text-grey">
            Fast, smooth transactions and optimized user flow for maximum
            performance.
          </p>
        </div>
      </div>
    </div>
    <CaseImage
      image={img1}
      title="Project process within timeline."
      height="818"
      number="2.0"
    />
  </div>
);
