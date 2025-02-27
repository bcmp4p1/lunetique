import './Transform.scss';
import arrow from '@/assets/arrow right.svg';

export const Transform = () => {
  console.log(123);

  return (
    <div className="transform">
      <div className="transform__shadows">
        <div className="transform__shadow" />
        <div className="transform__shadow" />
        <div className="transform__shadow" />
        <div className="transform__shadow" />
        <div className="transform__shadow" />
        <div className="transform__shadow" />
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
          <div className="transform__circle">
            <p>Contact me</p>
            <img src={arrow} alt="" />
          </div>
        </button>
      </div>
    </div>
  );
};
