import React from 'react';
import logo from '@/assets/header-logo.svg';
import './Header.scss';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const { pathname } = useLocation();

  console.log(pathname, 222);

  return (
    <header className="header">
      {pathname === '/' ? (
        <div className="header__background" />
      ) : (
        <div className="header__lines">
          <div className="header__line" />
          <div className="header__line" />
          <div className="header__line" />
          <div className="header__line" />
          <div className="header__line" />
          <div className="header__line" />
          <div className="header__line" />
          <div className="header__line" />
        </div>
      )}

      <img className="header__logo" src={logo} alt="logo" />
      <Link to="/" className="header__container">
        <p className="header__title">Lunétique</p>
        <p className="header__author">by Vlad Mozharovsky</p>
      </Link>
    </header>
  );
};
