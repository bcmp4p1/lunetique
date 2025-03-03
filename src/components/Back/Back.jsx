import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '@/assets/arrow-left.svg';

export const Back = () => (
  <Link to="/" className="back">
    <img src={arrow} alt="back" className="back-arrow" />
    <span>Back</span>
  </Link>
);
