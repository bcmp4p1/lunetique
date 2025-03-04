import React from 'react';
import './CeratopsSystem.scss';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import img1 from '@/assets/ceratops11.png';
import img2 from '@/assets/ceratops12.png';
import { CaseImage } from '@/components/CaseImage/CaseImage';

export const CeratopsSystem = () => (
  <div className="ceratops-system" id="tray-system">
    <SectionTitle
      title="Say Goodbye to Clunky UI."
      section="Tray System"
      isStar
    />
    <div className="ceratops-system__top">
      <p className="ceratops-system__left">
        A smarter way to streamline interactions.
      </p>
      <div className="ceratops-system__right">
        <p className="text-grey">
          Our pursuit of simplicity led us to explore unique approaches to core
          navigation — maintaining a streamlined interface that is uncluttered
          yet powerful. After experimenting with various patterns, we arrived at
          our dynamic tray system.
        </p>
        <p className="text-grey">
          One advantage of leveraging trays over full screen flows is the
          preservation of context. Unlike full screen transitions that can
          displace users from where they just were, trays overlay content
          directly onto the current interface.
        </p>
      </div>
    </div>
    <CaseImage image={img1} title="Tray system" height="800" number="4.0" />
    <div className="ceratops-system__top">
      <p className="ceratops-system__left">
        Adaptive Trays for Seamless Interaction.
      </p>
      <div className="ceratops-system__right">
        <p className="text-grey">
          Ceratops dynamic tray system comprises components housed within trays
          that can effortlessly expand, contract, and adapt in response to a
          user’s actions. Trays can appear on the fly and function as a
          condensed version of the app, with a specific set of constraints and
          capabilities.
        </p>
        <p className="text-grey">
          To prevent any confusion during transitions, each subsequent tray is
          designed to vary in height. This makes the progression or change
          unmistakably clear. This constraint occasionally requires us to
          rewrite content or tweak the design of a tray slightly to make a
          transition apparent.
        </p>
      </div>
    </div>
    <CaseImage image={img2} title="Tray sizes" height="626" number="4.1" />
  </div>
);
