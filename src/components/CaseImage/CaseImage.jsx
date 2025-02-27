import React from 'react';
import './CaseImage.scss';

// eslint-disable-next-line react/prop-types
export const CaseImage = ({ image, title, number = '', height }) => (
  <div className="case-image">
    <img
      src={image}
      alt="case"
      className={`case-image__image case-image__image--${height}`}
    />
    <div className="case-image__description">
      <p>
        <span className="case-image__text">{number}</span> {title}
      </p>
      <p className="case-image__definition">image</p>
    </div>
  </div>
);
