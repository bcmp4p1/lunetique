import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import { Back } from '@/components/Back/Back';

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== '/' && <Back />}
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
