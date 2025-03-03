import React from 'react';
import './CeratopsRetro.scss';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
// import img1 from '@/assets/ceratops18.png';
import icon from '@/assets/h11.svg';
import h2 from '@/assets/h12.svg';
import h3 from '@/assets/h13.svg';
import h4 from '@/assets/h14.svg';
import { CaseImage } from '@/components/CaseImage/CaseImage';

export const CeratopsRetro = () => (
  <div className="ceratops-retro">
    <SectionTitle
      title="More Than Just an Interface."
      section="Retrospective"
      isStar
    />
    <div className="ceratops-retro__top">
      <p className="ceratops-retro__left">Design that feels like magic.</p>
      <div className="ceratops-retro__right">
        <p className="text-grey">
          Great design is not only about beauty, but also about the deep
          connection between people and technology. Today, our lives are made up
          of many digital interactions, and infusing them with moments of magic
          seems important - at least to me.
        </p>
        <p className="text-grey">
          While creating this experience took a significant amount of effort and
          time, we realized it was worth it. A product that resonates in the
          hearts of users shows respect for them, their time, and their choices.
        </p>
        <p className="text-grey">
          Ceratops was created with one goal in mind - not just to meet
          expectations, but to exceed them. It is a product that inspires trust,
          provides security and simplifies the complex.
        </p>
      </div>
    </div>
    <div className="ceratops-problem__block">
      <div className="ceratops-problem__background" />
      <div className="ceratops-problem__container">
        <div className="ceratops-problem__top">
          <img src={icon} alt="SUCCESS" className="ceratops-problem__icon" />
          <p className="ceratops-problem__icon-title">A HUGE SUCCESS</p>
        </div>
        <p className="ceratops-problem__text">
          After countless hours of development, we presented Ceratops to
          investors—and it paid off. We secured the next round of funding,
          raising approximately $700,000!
        </p>
      </div>
    </div>
    <div className="ceratops-retro__top">
      <p className="ceratops-retro__left">Major Milestone Unlocked:</p>

      <div className="ceratops-problem__points">
        <div className="ceratops-problem__point">
          <img src={h2} alt="" className="ceratops-problem__point-image" />
          <p className="text-white">
            Ambiguity Sparks Creativity.{' '}
            <span className="text-grey">
              Lack of direction encouraged bold ideas and unexpected solutions.
            </span>
          </p>
        </div>
        <div className="ceratops-problem__point">
          <img src={h3} alt="" className="ceratops-problem__point-image" />
          <p className="text-white">
            Constraints Fuel Innovation.{' '}
            <span className="text-grey">
              New perspectives on limitations led to fresh problem-solving
              approaches.
            </span>
          </p>
        </div>
        <div className="ceratops-problem__point">
          <img src={h4} alt="" className="ceratops-problem__point-image" />
          <p className="text-white">
            Simplicity Means Clarity.{' '}
            <span className="text-grey">
              Reducing complexity, not features, made the experience more
              intuitive.
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
);
