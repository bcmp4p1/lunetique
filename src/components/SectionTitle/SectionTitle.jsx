import star from '@/assets/star.svg';

// eslint-disable-next-line react/prop-types
export const SectionTitle = ({ section, title, isStar = false }) => (
  <div className="section">
    <p
      className={
        isStar ? 'section__section section__section--big' : 'section__section'
      }
    >
      {isStar && <img src={star} alt="star" className="section__star" />}

      <span>{section}</span>
    </p>
    <p
      className={
        isStar ? 'section__title section__title--big' : 'section__section'
      }
    >
      {title}
    </p>
  </div>
);
