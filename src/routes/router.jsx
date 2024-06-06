import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import Home from "../pages/Home/Home";
import EstateDetails from "../components/EstateDetails/EstateDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        loader: () => fetch("/data.json"),
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile />,
      },
      {
        path: "/estateDetails/:esID",
        element: <EstateDetails />,
      },
    ],
  },
]);

export default router;
