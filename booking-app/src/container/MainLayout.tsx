import { Outlet } from "react-router-dom";
import Footer from "../layout/footer/Footer";
import Header from "../layout/header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
