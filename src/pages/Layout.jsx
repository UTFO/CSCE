/* eslint-disable prettier/prettier */
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import CSCENavbar from '../components/Navbar';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <CSCENavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
