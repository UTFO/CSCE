/* eslint-disable prettier/prettier */
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navigation';
import ScrollToTop from '../components/ScrollToTop';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
