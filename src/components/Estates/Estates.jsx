import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Estates = ({ estates }) => {
  return (
    <section className="w-full max-w-[90%] mx-auto my-10 md:my-16">
      <Typography variant="h2" className="mb-8 text-center md:mb-14">
        All The Awesome Estates
      </Typography>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {estates.map((estate) => {
          const {
            id,
            image,
            estate_title,
            description,
            segment_name,
            location,
            area,
            status,
            price,
            facilities,
          } = estate;

          return (
            <Card className="mx-auto mt-6 max-w-96" key={id}>
              <CardHeader color="blue-gray" className="relative h-56">
                <img src={image} alt={estate_title} />
              </CardHeader>
              <CardBody className="space-y-2">
                <Typography variant="h5" color="blue-gray">
                  {estate_title}
                </Typography>
                <Typography>{description}</Typography>
                <Typography>
                  Segment :{" "}
                  <span className="font-semibold">{segment_name}</span>
                </Typography>
                <Typography>
                  Location : <span className="font-semibold">{location}</span>
                </Typography>
                <Typography>
                  Total Area : <span className="font-semibold">{area}</span>
                </Typography>
                <Typography>
                  Status : <span className="font-semibold">{status}</span>
                </Typography>
                <Typography>
                  Price : <span className="font-semibold">{price}</span>
                </Typography>
                <div className="flex">
                  Facilities :{" "}
                  <Typography className="flex flex-wrap gap-2 font-semibold">
                    {facilities.map((el, idx) => {
                      return <span key={idx}>{el}</span>;
                    })}
                  </Typography>
                </div>
              </CardBody>
              <CardFooter className="pt-0">
                <Link to={`/estateDetails/${id}`}>
                  <Button fullWidth={true}>View Details</Button>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
export default Estates;
