import { Outlet } from "react-router-dom";
import NavbarSimple from "../components/Navbar/SimpleNavbar";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <section>
      <NavbarSimple />
      <section className="container max-w-[90%] mx-auto">
        <Outlet />
      </section>
      <Footer />
    </section>
  );
};
export default Root;
