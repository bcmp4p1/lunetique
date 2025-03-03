import { SectionTitle } from '../SectionTitle/SectionTitle';
import './About.scss';

export const About = () => {
  console.log(123);

  return (
    <div className="about">
      <SectionTitle section="About me" title="Your design partner" />
      <div className="about__container">
        <p className="about__me">
          <span style={{ color: 'white' }}>Hi:)</span> I&#39;m Vlad the product
          designer. <span style={{ color: 'white' }}>Lunétique</span> is my tiny
          speck on the internet, where I focus on crafting beautiful websites и
          high-converting digital products.
        </p>
        <p className="about__me">
          When designing, I always try to empathize and put myself in the
          user&#39;s shoes, to show empathy. I am especially obsessed with
          interaction and small that many people might miss, but which I believe
          greatly improve the user experience. I&#39;m a firm believer that
          small details and polish matter.
        </p>
        <p className="about__me">
          I’m always excited to collaborate with startups and founders shaping
          the future of digital products. If you’re looking to elevate your
          product’s design, let’s connect.
        </p>
      </div>
    </div>
  );
};
