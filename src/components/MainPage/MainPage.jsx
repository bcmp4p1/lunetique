import React from 'react';
import './MainPage.scss';
import { Slider } from '@/components/Slider/Slider';
import { Title } from '../Title/Title';
import { About } from '../About/About';
import { Works } from '../Works/Works';
import { Transform } from '../Transform/Transform';
import { Experience } from '../Experience/Experience';

export const MainPage = () => (
  <div className="main">
    <Title />
    <Slider />
    <About />
    <Works />
    <Experience />
    <Transform />
  </div>
);
