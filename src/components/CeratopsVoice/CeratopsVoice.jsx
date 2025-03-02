import React from 'react';
import './CeratopsVoice.scss';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import img1 from '@/assets/ceratops17.png';
import { CaseImage } from '@/components/CaseImage/CaseImage';

export const CeratopsVoice = () => (
  <div className="ceratops-voice">
    <SectionTitle
      title="Highlighting the overlooked."
      section="Ton of voice"
      isStar
    />
    <div className="ceratops-voice__top">
      <p className="ceratops-voice__left">Simple, Yet Meaningful.</p>
      <div className="ceratops-voice__right">
        <p className="text-grey">
          We could list all the standard wallet features, but we'd rather focus
          on what others overlook.
        </p>
        <p className="text-grey">
          One major example of this is the process of creating a new wallet or
          praise for a successful coin exchange - an important, albeit rare,
          action for most users.
        </p>
        <p className="text-grey">
          Many wallet creation apps are missing out on potential. They may
          simplify the process, but at the expense of making it seem mundane or
          glossing over the implications of what is happening.
        </p>
      </div>
    </div>
    <CaseImage
      image={img1}
      title="Success from the use of functions"
      height="736"
      number="7.0"
    />
  </div>
);
