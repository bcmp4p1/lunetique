import React from 'react';
import './SentinelSolution.scss';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import h5 from '@/assets/h5.svg';
import h6 from '@/assets/h6.svg';
import h7 from '@/assets/h7.svg';
import img11 from '@/assets/sentinel11.png';
import img12 from '@/assets/sentinel12.png';
import img13 from '@/assets/sentinel13.png';
import img14 from '@/assets/sentinel14.png';
import { CaseImage } from '@/components/CaseImage/CaseImage';

export const SentinelSolution = () => (
  <div className="sentinel-solution">
    <SectionTitle
      title="Signing a transaction? Find out what's really going on!"
      section="Solution"
      isStar
    />
    <div className="sentinel-solution__top">
      <p className="sentinel-solution__title">
        Personal shield against hidden threats.
      </p>
      <div className="sentinel-solution__text">
        Transaction Simulator analyzes the smart contract before you sign the
        transaction and visually shows you what rights you are actually
        transferring.
      </div>
    </div>
    <CaseImage
      image={img11}
      title="Pop-up Transaction Simulator"
      height="990"
      number="2.0"
    />
    <CaseImage
      image={img12}
      title="Transaction Simulator pop-up (other website)"
      height="990"
      number="2.1"
    />
    <div className="sentinel-solution__box">
      <p className="sentinel-solution__box-left">
        Comprehensive Web3 Real-time protection:
      </p>
      <div className="sentinel-solution__box-right">
        <div className="sentinel-solution__poin">
          <div className="sentinel-solution__point">
            <div className="sentinel-solution__points">
              <img src={h5} alt="" className="sentinel-solution__point-image" />
              <p className="text-white">Twitter Scam Detection</p>
            </div>
            <p className="text-grey">
              Our proactive scam detection identifies accounts with suspicious
              activities to ensure a safer environment.
            </p>
          </div>
          <div className="sentinel-solution__point">
            <div className="sentinel-solution__points">
              <img src={h6} alt="" className="sentinel-solution__point-image" />
              <p className="text-white">Discord Token Theft Detection</p>
            </div>
            <p className="text-grey">
              Sentinel scans for malicious apps that attempt to steal your
              Discord token & offers a robust protection against theft.
            </p>
          </div>
        </div>
        <div className="sentinel-solution__point sentinel-solution__point--big">
          <div className="sentinel-solution__points">
            <img src={h7} alt="" className="sentinel-solution__point-image" />
            <p className="text-white">Real-Time Protection</p>
          </div>
          <p className="text-grey">
            Once installed, our extension operates silently in the background,
            automatically scanning and analyzing websites, URLs, and
            transactions in real-time. Utilizing advanced algorithms, it
            continuously detects malicious code and potential threats, providing
            seamless protection.
          </p>
        </div>
      </div>
    </div>
    <CaseImage
      image={img13}
      title="Twitter Scam Detection"
      height="990"
      number="2.2"
    />
    <CaseImage
      image={img14}
      title="Real-Time Protection"
      height="740"
      number="2.3"
    />
  </div>
);
