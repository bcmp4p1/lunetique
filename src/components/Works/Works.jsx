import './Works.scss';
import p1 from '@/assets/p1.svg';
import p2 from '@/assets/p2.svg';
import p3 from '@/assets/p3.svg';
import p4 from '@/assets/p4.svg';
import arrow from '@/assets/hover-arrow.svg';
import vector from '@/assets/vector.svg';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../SectionTitle/SectionTitle';

export const Works = () => (
  <div className="works">
    <SectionTitle
      section="MY WORKS"
      title="Partners in work, friends for life"
    />
    <div className="works__links">
      <Link to="/ceratops" className="works__link" aria-label="Close">
        <div className="works__links-modal">
          <p>Ceratops</p>
          <span>Mobile App</span>
        </div>
        <div className="works__link-p3">
          <img className="works__link-p3-icon" src={p1} alt="" />
          <img className="works__link-p3-arrow" src={arrow} alt="" />
        </div>
      </Link>
      <img src={vector} alt="" />
      <Link to="/sentinel" className="works__link" aria-label="Close">
        <div className="works__links-modal">
          <p>Sentinel</p>
          <span>Chrome extension & Web Design</span>
        </div>
        <div className="works__link-p3">
          <img className="works__link-p3-icon" src={p2} alt="" />
          <img className="works__link-p3-arrow" src={arrow} alt="" />
        </div>
      </Link>
      <img src={vector} alt="" />
      <button className="works__link" aria-label="Close">
        <div className="works__links-modal">
          <p>Coming Soon</p>
        </div>
        <div className="works__link-p3">
          <img className="works__link-p3-icon" src={p3} alt="" />
          <img className="works__link-p3-arrow" src={arrow} alt="" />
        </div>
      </button>
      <img src={vector} alt="" />
      <button className="works__link" aria-label="Close">
        <div className="works__links-modal">
          <p>Coming Soon</p>
        </div>
        <div className="works__link-p3">
          <img className="works__link-p3-icon" src={p4} alt="" />
          <img className="works__link-p3-arrow" src={arrow} alt="" />
        </div>
      </button>
    </div>
  </div>
);
