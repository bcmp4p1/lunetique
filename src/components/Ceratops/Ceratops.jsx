import React from 'react';
import './Ceratops.scss';
import { CeratopsHead } from '@/components/CeratopsHead/CeratopsHead';
import { CeratopsHighlights } from '@/components/CeratopsHighlights/CeratopsHighlights';
import { Separator } from '@/components/Separator/Separator';
import { CeratopsContext } from '@/components/CeratopsContext/CeratopsContext';
import { CeratopsProblem } from '@/components/CeratopsProblem/CeratopsProblem';
import { CeratopsHints } from '../CeratopsHints/CeratopsHints';
import { CeratopsSystem } from '../CeratopsSystem/CeratopsSystem';
import { CeratopsSpeed } from '../CeratopsSpeed/CeratopsSpeed';
import { CeratopsStorage } from '../CeratopsStorage/CeratopsStorage';
import { CeratopsVoice } from '../CeratopsVoice/CeratopsVoice';
import { CeratopsRetro } from '../CeratopsRetro/CeratopsRetro';
import { CeratopsNextProject } from '../CeratopsNextProject/CeratopsNextProject';

export const Ceratops = () => (
  <div className="ceratops">
    <CeratopsHead />
    <CeratopsHighlights />
    <Separator />
    <CeratopsContext />
    <Separator />
    <CeratopsProblem />
    <Separator />
    <CeratopsHints />
    <Separator />
    <CeratopsSystem />
    <Separator />
    <CeratopsSpeed />
    <Separator />
    <CeratopsStorage />
    <Separator />
    <CeratopsVoice />
    <Separator />
    <CeratopsRetro />
    <Separator />
    <CeratopsNextProject />
  </div>
);
