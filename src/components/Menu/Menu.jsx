import { useEffect, useState } from 'react';
import './Menu.scss';
import { useLocation } from 'react-router-dom';

const sectionsCeratops = [
  { id: 'highlights', label: 'Highlights' },
  { id: 'context', label: 'Context' },
  { id: 'problem', label: 'The problem' },
  { id: 'smart-hints', label: 'Smart Hints' },
  { id: 'tray-system', label: 'Tray System' },
  { id: 'transaction-speed', label: 'Transaction Speed' },
  { id: 'secure-key-storage', label: 'Secure Key Storage' },
  { id: 'tone-of-voice', label: 'Tone of Voice' },
  { id: 'retrospective', label: 'Retrospective' },
];

const sectionsSentinel = [
  { id: 's-highlights', label: 'Highlights' },
  { id: 's-problem', label: 'The problem' },
  { id: 's-solution', label: 'Solution' },
  { id: 's-installation', label: 'Installation' },
  { id: 's-interface', label: 'Interface' },
];

export const Menu = () => {
  const [activeSection, setActiveSection] = useState('');
  const [sections, setSections] = useState(sectionsCeratops);
  const { pathname } = useLocation();

  useEffect(() => {
    setSections(
      pathname.includes('ceratops') ? sectionsCeratops : sectionsSentinel,
    );
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = '';

      [...sectionsCeratops, ...sectionsSentinel].forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top <= 150) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="menu">
      <h3 className="menu__head">CONTENTS</h3>
      <ul className="menu__list">
        {sections.map(({ id, label }) => (
          <li key={id} className="menu__item">
            <button
              onClick={() => scrollToSection(id)}
              className={
                activeSection === id
                  ? 'menu__button menu__button--active'
                  : 'menu__button'
              }
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
