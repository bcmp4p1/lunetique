import React from 'react';
import './SentinelInterface.scss';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import img20 from '@/assets/sentinel20.png';
import { CaseImage } from '@/components/CaseImage/CaseImage';

export const SentinelInterface = () => (
  <div className="sentinel-interface" id="s-interface">
    <SectionTitle title="One Click to Stay Safe" section="Interface" isStar />
    <div className="sentinel-interface__top">
      <p className="sentinel-interface__title">Easy management of settings.</p>
      <div className="sentinel-interface__text">
        <p>
          Each function can be activated with a simple toggle switch. This is
          enough to start the function and keep it active, and the extension
          will automatically provide the right protection by focusing on the
          selected task.{' '}
        </p>
        <p>
          We&#39;ve also added a Report Scam feature that makes it easy to file
          a complaint about a fraudulent site. You just need to paste the link
          into the report field and we&#39;ll take care of the rest.
        </p>
      </div>
    </div>
    <CaseImage
      image={img20}
      title="Extension interface and functionality"
      height="990"
      number="4.0"
    />
  </div>
);
