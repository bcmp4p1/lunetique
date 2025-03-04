import React from 'react';
import './CeratopsStorage.scss';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import img1 from '@/assets/ceratops15.png';
import img2 from '@/assets/ceratops16.png';
import { CaseImage } from '@/components/CaseImage/CaseImage';

export const CeratopsStorage = () => (
  <div className="ceratops-storage" id="secure-key-storage">
    <SectionTitle
      title="Next-Level Security."
      section="Secure Key Storage"
      isStar
    />
    <div className="ceratops-storage__top">
      <p className="ceratops-storage__left">Beyond standard protection.</p>
      <div className="ceratops-storage__right">
        <p className="text-grey">
          We’ve implemented all essential security measures found in top wallets
          and added something extra. Activity History is a unique feature that
          logs your wallet activity, helping you detect unauthorized access and
          maintain control.
        </p>
        <p className="text-grey">
          Security is not only about storage, but also about awareness and
          control.
        </p>
      </div>
    </div>
    <CaseImage
      image={img1}
      title="Recovery Phrase / Private Key"
      height="736"
      number="6.0"
    />
    <CaseImage
      image={img2}
      title="History of action"
      height="800"
      number="6.1"
    />
  </div>
);
