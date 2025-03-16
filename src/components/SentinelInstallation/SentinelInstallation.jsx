import React from 'react';
import './SentinelInstallation.scss';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import img15 from '@/assets/sentinel15.png';
import img16 from '@/assets/sentinel16.png';
import img17 from '@/assets/sentinel17.png';
import img18 from '@/assets/sentinel18.png';
import img19 from '@/assets/sentinel19.png';
import { CaseImage } from '@/components/CaseImage/CaseImage';

export const SentinelInstallation = () => (
  <div className="sentinel-installation" id="s-installation">
    <SectionTitle
      title="Install in 30 Seconds and Forget About Scams!"
      section="Installation"
      isStar
    />
    <div className="sentinel-installation__top">
      <p className="sentinel-installation__title">
        Fast Installation – Instant Protection.
      </p>
      <div className="sentinel-installation__text">
        Users shouldn&#39;t waste time on complicated setups. We&#39;ve designed
        the installation process to take no more than 30 seconds. One click –
        and your browser is protected from phishing attacks, fake websites, and
        token theft.
      </div>
    </div>
    <CaseImage
      image={img15}
      title="Adding an extension from the Google Chrome store"
      height="742"
      number="3.0"
    />
    <CaseImage
      image={img16}
      title="Installation confirmation screen"
      height="742"
      number="3.1"
    />
    <CaseImage
      image={img17}
      title="Confirmation of installation"
      height="742"
      number="3.2"
    />
    <CaseImage
      image={img18}
      title="Extension on the Google Chrome bar"
      height="742"
      number="3.3"
    />
    <CaseImage
      image={img19}
      title="Pop-up window for checking"
      height="742"
      number="3.4"
    />
  </div>
);
