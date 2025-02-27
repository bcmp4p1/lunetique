import './Title.scss';
import star from '@/assets/star-white.svg';

export const Title = () => {
  console.log(123);

  return (
    <div className="title">
      <div className="title__up">
        <img src={star} alt="" />
        <p>Functional brilliance</p>
      </div>
      <div className="title__title">
        <p className="title__title1">Design Boutique</p>
        <p className="title__title2">of Digital Excellence</p>
      </div>
      <div className="title__text">
        <p>
          From creative web aesthetics to shaping high-converting digital
          products. Focused on SaaS, AI & Web3 Products.
        </p>
      </div>
      <button className="transform__button">
        <div className="transform__circle">
          <p>Contact me</p>
          {/* <img src={star} alt="" /> */}
        </div>
      </button>
      <div>
        <p>Experience working with the best minds on the planet</p>
        {/* <div></div> */}
      </div>
    </div>
  );
};
