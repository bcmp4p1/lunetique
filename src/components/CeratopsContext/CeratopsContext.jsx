import React from 'react';
import './CeratopsContext.scss';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { CaseImage } from '@/components/CaseImage/CaseImage';
import case1 from '@/assets/ceratops6.png';
import case2 from '@/assets/ceratops7.png';

export const CeratopsContext = () => (
  <div className="ceratops-context">
    <SectionTitle
      title="A chance to set a new standard."
      section="CONTEXT"
      isStar
    />
    <div className="ceratops-context__top">
      <p className="ceratops-context__title">The mission was clear.</p>
      <div className="ceratops-context__container">
        <p>
          OOur goal was to make Ceratops accessible to novices without
          sacrificing depth and power for power users. This was particularly
          crucial for intricate flows like onboarding, which had many potential
          paths and edge cases. We wanted to avoid turning critical flows into
          daunting tasks and overwhelming the user.
        </p>
        <p>
          User surveys have proven invaluable, confirming a balance that truly
          meets real needs.
        </p>
      </div>
    </div>
    <CaseImage
      image={case1}
      title="Information architecture"
      height="472"
      number="1.0"
    />
    <CaseImage
      image={case2}
      title="Takes from the interview"
      height="674"
      number="1.1"
    />
  </div>
);
