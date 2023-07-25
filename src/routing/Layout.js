import { Outlet } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Header from "../components/Header/Header";
import { useSelector } from "react-redux";
import Footer from "../components/Footer/Footer";
import { colors } from "../config/colors/colors";
import ActivityIndicator from "../components/ActivityIndicator/ActivityIndicator";

const Layout = () => {

  return (
    <div className={`relative min-h-screen ${colors.backgroundColor}`}>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <div>
        <div className="mx-6 mt-4 ">
          <Breadcrumb />
          <div className="mt-2">
            <Outlet />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
