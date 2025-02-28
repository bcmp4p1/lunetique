import React from 'react';
import './CeratopsSystem.scss';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';

export const CeratopsSystem = () => (
  <div className="ceratops-system">
    <SectionTitle title="Say Goodbye to Clunky UI." section="Tray System" />
    <p>123</p>
    <div className="">
      <p>A smarter way to streamline interactions.</p>
      <div>
        <p>
          Our pursuit of simplicity led us to explore unique approaches to core
          navigation — maintaining a streamlined interface that is uncluttered
          yet powerful. After experimenting with various patterns, we arrived at
          our dynamic tray system.
        </p>
        <p>
          One advantage of leveraging trays over full screen flows is the
          preservation of context. Unlike full screen transitions that can
          displace users from where they just were, trays overlay content
          directly onto the current interface.
        </p>
      </div>
    </div>
  </div>
);
