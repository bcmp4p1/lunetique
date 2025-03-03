import React from 'react';
import './Sentinel.scss';
import { Separator } from '@/components/Separator/Separator';
import { SentinelHead } from '@/components/SentinelHead/SentinelHead';
import { SentinelHighlights } from '../SentinelHighlights/SentinelHighlights';
import { SentinelProblem } from '../SentinelProblem/SentinelProblem';
import { SentinelSolution } from '../SentinelSolution/SentinelSolution';

export const Sentinel = () => (
  <div className="sentinel">
    <SentinelHead />
    <SentinelHighlights />
    <Separator />
    <SentinelProblem />
    <Separator />
    <SentinelSolution />
    <Separator />
  </div>
);
