import {
  Button,
  Card,
  Input,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Bounce, toast } from "react-toastify";
import { Helmet } from "react-helmet";

const UpdateProfile = () => {
  const { user, loading, updateLoggedInUser } = useContext(AuthContext);

  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!displayName || !photoURL || !email || !password) {
      setFormError("Please fill out all fields.");
      return;
    }

    const isValidPassword = validatePassword(password);
    if (!isValidPassword) {
      setPasswordError(
        "Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return;
    }

    try {
      const result = await updateLoggedInUser(
        displayName,
        photoURL,
        email,
        password
      );
      toast.success("Profile Updated!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      console.log(result.user);
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      console.log(error.message);
    }
  };

  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    return hasUppercase && hasLowercase && isLongEnough;
  };
  return (
    <section className="w-full max-w-[90%] mx-auto my-10 md:my-16">
      <Helmet>
        <title>Sweet Home || Update Profile</title>
      </Helmet>
      <Typography className="text-center" variant="h2" color="blue-gray">
        Update Your Profile Info
      </Typography>
      {loading ? (
        <Spinner color="blue" className="w-16 h-16 mx-auto my-10" />
      ) : (
        <Card color="transparent" shadow={false}>
          <form
            className="max-w-screen-lg mx-auto mt-8 mb-2 w-80 sm:w-96"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="flex flex-col gap-6 mb-1">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name : {user.displayName}
              </Typography>
              <Input
                size="lg"
                placeholder={user.displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email : {user.email}
              </Typography>
              <Input
                size="lg"
                placeholder={user.email}
                onChange={(e) => setEmail(e.target.value)}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />

              <Typography variant="h6" color="blue-gray" className="-mb-3">
                PhotoURL : {user.photoURL}
              </Typography>
              <Input
                size="lg"
                placeholder={user.photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password : ******
              </Typography>
              <Input
                size="lg"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="******"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {passwordError && (
                <Typography variant="body" color="red" className="mt-1">
                  {passwordError}
                </Typography>
              )}
              {formError && (
                <Typography variant="body" color="red" className="mt-1">
                  {formError}
                </Typography>
              )}
            </div>

            <Button type="submit" className="mt-6" fullWidth>
              I am interested
            </Button>
          </form>
        </Card>
      )}
    </section>
  );
};
export default UpdateProfile;
