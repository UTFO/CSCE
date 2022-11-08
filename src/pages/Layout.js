import CSCENavbar from "../components/Navbar";
import { Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <CSCENavbar />
            <Outlet />
        </>
    );
}

export default Layout;