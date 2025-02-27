// eslint-disable-next-line react/prop-types
export const SectionTitle = ({ section, title }) => {
  console.log(123);

  return (
    <div className="section">
      <p className="section__section">{section}</p>
      <p className="section__title">{title}</p>
    </div>
  );
};
