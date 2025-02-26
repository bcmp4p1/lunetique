import '@/App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from '@/layouts/Layout';
import { CaseOne } from '@/components/CaseOne/CaseOne';
import { MainPage } from './components/MainPage/MainPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="case1" element={<CaseOne />} />
      </Route>
    </Routes>
  );
}

export default App;
