import React from 'react';
import './Sentinel.scss';
import { Separator } from '@/components/Separator/Separator';
import { SentinelHead } from '@/components/SentinelHead/SentinelHead';

export const Sentinel = () => (
  <div className="sentinel">
    <SentinelHead />
    <Separator />
  </div>
);
