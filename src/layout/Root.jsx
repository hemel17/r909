import { Outlet } from "react-router-dom";
import NavbarSimple from "../components/Navbar/SimpleNavbar";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <section>
      <NavbarSimple />
      <Outlet />
      <Footer />
    </section>
  );
};
export default Root;
