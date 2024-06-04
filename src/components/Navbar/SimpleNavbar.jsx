import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const NavList = () => {
  return (
    <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" color="blue-gray" className="p-1 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex items-center transition-colors hover:text-blue-500 text-blue-500"
              : "flex items-center transition-colors hover:text-blue-500"
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography as="li" color="blue-gray" className="p-1 font-medium">
        <NavLink
          to="/updateProfile"
          className={({ isActive }) =>
            isActive
              ? "flex items-center transition-colors hover:text-blue-500 text-blue-500"
              : "flex items-center transition-colors hover:text-blue-500"
          }
        >
          Update Profile
        </NavLink>
      </Typography>
    </ul>
  );
};

const NavbarSimple = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="px-6 py-3 mx-auto min-w-full">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          variant="h4"
          className="mr-4 cursor-pointer py-1.5 text-xl font-medium"
        >
          Sweet<span className="text-blue-500">Home</span>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <Link to="/login">
              <Button variant="outlined">Log In</Button>
            </Link>
          </div>
          <IconButton
            variant="text"
            className="w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="w-6 h-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="w-6 h-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default NavbarSimple;
