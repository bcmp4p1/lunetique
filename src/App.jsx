import '@/App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from '@/layouts/Layout';
import { Ceratops } from '@/components/Ceratops/Ceratops';
import { useEffect } from 'react';
import { MainPage } from './components/MainPage/MainPage';
import { Sentinel } from './components/Sentinel/Sentinel';

function App() {
  useEffect(() => {
    const updateScale = () => {
      const minWidth = 1330;
      const screenWidth = window.innerWidth;

      if (screenWidth < minWidth) {
        const scale = screenWidth / minWidth;
        document.body.style.transform = `scale(${scale})`;
        document.body.style.transformOrigin = 'top left';
        document.body.style.width = `${minWidth}px`; // Фиксируем ширину, чтобы не было скролла
      }
    };

    updateScale(); // Вызываем при загрузке
    window.addEventListener('resize', updateScale); // Следим за изменением размера экрана

    return () => window.removeEventListener('resize', updateScale); // Удаляем слушатель при размонтировании
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="ceratops" element={<Ceratops />} />
        <Route path="sentinel" element={<Sentinel />} />
      </Route>
    </Routes>
  );
}

export default App;
