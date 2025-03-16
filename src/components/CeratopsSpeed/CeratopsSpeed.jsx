import React from 'react';
import './CeratopsSpeed.scss';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import img1 from '@/assets/ceratops13.png';
import img2 from '@/assets/ceratops14.png';
import { CaseImage } from '@/components/CaseImage/CaseImage';

export const CeratopsSpeed = () => (
  <div className="ceratops-speed" id="transaction-speed">
    <SectionTitle
      title="Take Control of Your Transactions."
      section="Transaction Speed"
      isStar
    />
    <div className="ceratops-speed__top">
      <p className="ceratops-speed__left">Customize Transaction Speed.</p>
      <div className="ceratops-speed__right">
        <p className="text-grey">
          One of the key issues we faced was managing transaction delays. We
          realized that users should have the ability to adjust transaction
          speeds based on the situation. This led to the idea of providing more
          flexibility: allowing users to choose between different speed levels
          for various types of payments.
        </p>
        <p className="text-grey">
          For example, for urgent transfers, users can select fast processing,
          while for less critical transactions, a more standard speed can be
          chosen.
        </p>
      </div>
    </div>
    <CaseImage
      image={img1}
      title="Transaction speeds screen (Normal + Underfunded)"
      height="860"
      number="5.0"
    />
    <CaseImage
      image={img2}
      title="Transaction speeds variations"
      height="876"
      number="5.1"
    />
  </div>
);
