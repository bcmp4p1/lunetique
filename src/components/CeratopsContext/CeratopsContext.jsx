import React from 'react';
import './CeratopsContext.scss';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';

export const CeratopsContext = () => (
  <div className="ceratops-context">
    <SectionTitle title="A chance to set a new standard." section="CONTEXT" />
    <div className="ceratops-context__text">
      <p className="ceratops-context__left">The mission was clear.</p>
      <div className="ceratops-context__right">
        <p className="ceratops-context__desc">
          Our goal was to make Ceratops accessible to novices without
          sacrificing depth and power for power users. This was particularly
          crucial for intricate flows like onboarding, which had many potential
          paths and edge cases. We wanted to avoid turning critical flows into
          daunting tasks and overwhelming the user. User surveys have proven
          invaluable, confirming a balance that truly meets real needs.
        </p>
        <p className="ceratops-context__desc">
          User surveys have proven invaluable, confirming a balance that truly
          meets real needs.
        </p>
      </div>
    </div>
  </div>
);
