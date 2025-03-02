import React from 'react';
import './CeratopsHints.scss';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import h9 from '@/assets/h9.svg';
import h10 from '@/assets/h10.svg';
import img1 from '@/assets/ceratops9.png';
import img2 from '@/assets/ceratops10.png';
import { CaseImage } from '@/components/CaseImage/CaseImage';

export const CeratopsHints = () => (
  <div className="ceratops-hints">
    <SectionTitle
      title="Guiding New Users Without Interrupting Experts."
      section="Smart Hints"
      isStar
    />
    <div className="ceratops-hints__top">
      <p className="ceratops-hints__left">
        Perfect Guidance at the Right Moment.
      </p>
      <p className="ceratops-hints__right">
        We introduced Smart Hints to help new users navigate complex wallet
        functions with ease. These subtle, context-aware tips provide just the
        right guidance when needed—without disrupting the experience for
        seasoned users.
      </p>
    </div>
    <div className="ceratops-hints__box">
      <div className="ceratops-hints__img">
        <CaseImage
          image={img1}
          title="Automatic Hints"
          height="632"
          number="3.0"
        />
      </div>
      <div className="ceratops-hints__text">
        <img src={h9} alt="" className="ceratops-hints__point-image" />
        <p className="text-white">
          Automatic Hints.{' '}
          <span className="text-grey">
            At critical moments like seed phrase creation, hints appear
            automatically, guiding new users through the process step-by-step.
            This ensures they understand key actions without overwhelming them.
          </span>
        </p>
      </div>
    </div>
    <div className="ceratops-hints__box">
      <div className="ceratops-hints__img">
        <CaseImage
          image={img2}
          title="Hint buttons"
          height="632"
          number="3.0"
        />
      </div>
      <div className="ceratops-hints__text">
        <img src={h10} alt="" className="ceratops-hints__point-image" />
        <p className="text-white">
          On-Demand Buttons.{' '}
          <span className="text-grey">
            On-Demand Buttons. Discreet buttons provide contextual tips that
            only appear when clicked, allowing users to access guidance only
            when they need it. Experienced users won’t be interrupted, while
            beginners get the help they need.
          </span>
        </p>
      </div>
    </div>
  </div>
);
