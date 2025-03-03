import './Transform.scss';
import arrow from '@/assets/arrow right.svg';

export const Transform = () => (
  <div className="transform">
    <div className="transform__shadows">
      <div className="transform__shadow" />
      <div className="transform__shadow" />
      <div className="transform__shadow" />
      <div className="transform__shadow" />
      <div className="transform__shadow" />
      <div className="transform__shadow" />
      <div className="transform__shadow--t" />
    </div>
    <div className="transform__container">
      <div className="transform__text">
        <p className="transform__up">Transform Your Vision into Reality</p>
        <p className="transform__bottom">
          Let’s talk and translate your ideas into impactful designs today.
        </p>
        <p className="transform__bottom">
          The future doesn&#39;t wait, why should you?
        </p>
      </div>
      <button className="transform__button">
        <a
          href="mailto:Lunetique.studio@gmail.com"
          target="_blank"
          className="transform__circle"
          rel="noreferrer"
        >
          <p>Contact me</p>
          <img src={arrow} alt="" />
        </a>
      </button>
    </div>
  </div>
);
