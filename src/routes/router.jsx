import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import Home from "../pages/Home/Home";
import EstateDetails from "../components/EstateDetails/EstateDetails";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import ErrorElemet from "../pages/ErrorElement/ErrorElemet";
import Invest from "../components/Invest/Invest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorElemet />,
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
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/invest",
        element: (
          <PrivateRoute>
            <Invest />
          </PrivateRoute>
        ),
      },
      {
        path: "/estateDetails/:esID",
        loader: () => fetch("/data.json"),
        element: (
          <PrivateRoute>
            <EstateDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
