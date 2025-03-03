import React from 'react';
import './Sentinel.scss';
import { Separator } from '@/components/Separator/Separator';
import { SentinelHead } from '@/components/SentinelHead/SentinelHead';
import { SentinelHighlights } from '../SentinelHighlights/SentinelHighlights';
import { SentinelProblem } from '../SentinelProblem/SentinelProblem';
import { SentinelSolution } from '../SentinelSolution/SentinelSolution';
import { SentinelInstallation } from '../SentinelInstallation/SentinelInstallation';
import { SentinelNextProject } from '../SentinelNextProject/SentinelNextProject';
import { SentinelInterface } from '../SentinelInterface/SentinelInterface';

export const Sentinel = () => (
  <div className="sentinel">
    <SentinelHead />
    <SentinelHighlights />
    <Separator />
    <SentinelProblem />
    <Separator />
    <SentinelSolution />
    <Separator />
    <SentinelInstallation />
    <Separator />
    <SentinelInterface />
    <Separator />
    <SentinelNextProject />
  </div>
);
