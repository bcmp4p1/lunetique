import React from 'react';
import logo from '@/assets/header-logo.svg';
import './Header.scss';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="header">
      {pathname === '/' ? (
        <div className="header__background" />
      ) : (
        <div className="header__lines-container">
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
        </div>
      )}

      {/* <Link to="/" className="header__container">
        <img className="header__logo" src={logo} alt="logo" />
        <div className="header__box">
          <p className="header__title">Lunétique</p>
          <p className="header__author">by Vlad Mozharovsky</p>
        </div>
      </Link> */}
    </header>
  );
};
