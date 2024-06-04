import { Outlet } from "react-router-dom";
import NavbarSimple from "../components/Navbar/SimpleNavbar";

const Root = () => {
  return (
    <section>
      <NavbarSimple />
      <section className="container max-w-[90%] mx-auto">
        <Outlet />
      </section>
    </section>
  );
};
export default Root;
