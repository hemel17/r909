import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { Bounce, toast } from "react-toastify";

const Invest = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.name.value = "";
    e.target.email.value = "";
    toast.success("Thanks For Your Interest!", {
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
  };

  return (
    <section className="w-full max-w-[90%] min-h-screen mx-auto mt-6 md:mt-10">
      <Typography variant="h2" color="blue-gray" className="text-center">
        Wanna Invest With Us?
      </Typography>

      <Card color="transparent" shadow={false}>
        <form
          className="max-w-screen-lg mx-auto mt-8 mb-2 w-80 sm:w-96"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex flex-col gap-6 mb-1">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              name="name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              name="email"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          <Button type="submit" className="mt-6" fullWidth>
            I am interested
          </Button>
        </form>
      </Card>
    </section>
  );
};
export default Invest;
