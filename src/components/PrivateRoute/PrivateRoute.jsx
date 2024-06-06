import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Login from "../Login/Login";
import { Spinner } from "@material-tailwind/react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  return (
    <section>
      {loading ? (
        <Spinner color="blue" className="w-16 h-16 mx-auto my-10" />
      ) : user ? (
        children
      ) : (
        <Login />
      )}
    </section>
  );
};

export default PrivateRoute;
