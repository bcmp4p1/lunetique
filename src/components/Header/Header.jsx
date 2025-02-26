import React from 'react';
import logo from '@/assets/header-logo.svg';
import './Header.scss';

export const Header = () => (
  <header className="header">
    <div className="header__background" />
    <img className="header__logo" src={logo} alt="logo" />
    <div className="header__container">
      <p className="header__title">Lunétique</p>
      <p className="header__author">by Vlad Mozharovsky</p>
    </div>
  </header>
);
