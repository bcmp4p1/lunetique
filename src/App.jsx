import '@/App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from '@/layouts/Layout';
import { Ceratops } from '@/components/Ceratops/Ceratops';
import { MainPage } from './components/MainPage/MainPage';
import { Sentinel } from './components/Sentinel/Sentinel';

function App() {
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
