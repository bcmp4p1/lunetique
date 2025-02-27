import './Experience.scss';
import p3 from '@/assets/p3.svg';
import star from '@/assets/star.svg';
import vector from '@/assets/Vector_horizontal.svg';
import { SectionTitle } from '../SectionTitle/SectionTitle';

export const Experience = () => {
  console.log(123);

  return (
    <div className="experience">
      <SectionTitle section="EXPERTISE" title="Work Experience" />
      <img className="experience__img1" src={p3} alt="" />
      <div className="experience__place">
        <p className="experience__role">Lead Product Designer, Web Bunny</p>
        <p className="experience__text">
          At Web Bunny, I focused on designing high-impact e-commerce platforms,
          SaaS products, and a Web3 crypto wallet. My role was to ensure
          seamless user experiences, drive conversion, and establish a scalable
          design system.
        </p>
        <p className="experience__text">
          I also implemented a component-based design system, reducing UI
          inconsistencies and accelerating feature development by 50%. My work
          at Web Bunny wasn’t just about aesthetics—it was about making design
          a core driver of business growth.
        </p>
        <div className="experience__date">
          <img src={star} alt="" />
          <p>2022 — Present</p>
        </div>
      </div>
      <img src={vector} alt="" />
      <div className="experience__place">
        <p className="experience__role">UX/UI Designer, Freelance</p>
        <p className="experience__text">
          I create websites and digital products that don't just look pretty,
          but work for results. In my work, I combine strategy, UX research and
          powerful UI design to help businesses increase conversion rates,
          improve user experience and stand out from the competition.
        </p>
        <div className="experience__date">
          <img src={star} alt="" />
          <p>2021 — Present</p>
        </div>
      </div>
    </div>
  );
};
