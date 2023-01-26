/* eslint-disable prettier/prettier */
import CSCENavbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <CSCENavbar />
      <Outlet />
    </div>
  );
};

export default Layout;
