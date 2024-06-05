import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
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
    ],
  },
]);

export default router;
