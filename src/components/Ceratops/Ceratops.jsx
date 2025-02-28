import React from 'react';
import './Ceratops.scss';
import { CeratopsHead } from '@/components/CeratopsHead/CeratopsHead';
import { CeratopsHighlights } from '@/components/CeratopsHighlights/CeratopsHighlights';
import { Separator } from '@/components/Separator/Separator';
import { CeratopsContext } from '@/components/CeratopsContext/CeratopsContext';
import { CeratopsSystem } from '../CeratopsSystem/CeratopsSystem';

export const Ceratops = () => (
  <div className="ceratops">
    <CeratopsHead />
    <CeratopsHighlights />
    <Separator />
    <CeratopsContext />
    <Separator />
    <CeratopsSystem />
  </div>
);
