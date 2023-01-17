/* eslint-disable prettier/prettier */
import CSCENavbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout">
      <CSCENavbar />
      <Outlet />
    </div>
  );
};

export default Layout;
