import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    createUser(email, password)
      .then((resutl) => console.log(resutl.user))
      .catch((error) => console.error(error));
  };

  return (
    <Card
      color="transparent"
      shadow={false}
      className="min-h-screen my4 md:my-6"
    >
      <div className="mx-auto">
        <Typography variant="h4" color="blue-gray" className="text-center">
          Register
        </Typography>
        <Typography color="gray" className="mt-1 font-normal text-center">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96"
        >
          <div className="flex flex-col gap-6 mb-1">
            {errors.name && (
              <span className="text-sm text-red-500">Name is required</span>
            )}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              // Register the email field with react-hook-form
              {...register("email", {
                required: true,
                pattern: /\S+@\S+\.\S+/,
              })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.type === "required" && "Email is required"}
                {errors.email.type === "pattern" && "Invalid email format"}
              </span>
            )}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              // Register the password field with react-hook-form
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">Password is required</span>
            )}
          </div>

          <Button className="mt-6" fullWidth type="submit">
            Register
          </Button>
          <Typography color="gray" className="mt-4 font-normal text-center">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-gray-900">
              Login
            </Link>
          </Typography>
        </form>
      </div>
    </Card>
  );
};

export default Register;
