import { Typography } from "@material-tailwind/react";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
  const { esID } = useParams();
  const estates = useLoaderData();
  const estateID = Number(esID);

  const estate = estates.find((el) => el.id === estateID);
  const {
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
    <section className="w-full max-w-[90%] mx-auto space-y-4 md:space-y-8 my-10 [&>*]:text-center">
      <Typography variant="h2" color="blue-gray" className="text-center">
        {estate_title}
      </Typography>
      <figure className="h-64 md:h-96">
        <img src={image} alt={estate_title} className="h-full mx-auto" />
      </figure>
      <Typography>{description}</Typography>
      <div className="flex justify-center gap-4 md:gap-8">
        <Typography>
          Segment : <span className="font-semibold">{segment_name}</span>
        </Typography>
        <Typography>
          Price : <span className="font-semibold">{price}</span>
        </Typography>
      </div>
      <Typography>
        Location : <span className="font-semibold">{location}</span>
      </Typography>
      <div className="flex justify-center gap-4 md:gap-8">
        <Typography>
          Total Area : <span className="font-semibold">{area}</span>
        </Typography>
        <Typography>
          Status : <span className="font-semibold">{status}</span>
        </Typography>
      </div>
      <div className="flex justify-center gap-2">
        <Typography>Facilities :</Typography>
        <Typography className="flex flex-wrap gap-2 font-semibold">
          {facilities.map((el, idx) => {
            return <span key={idx}>{el}</span>;
          })}
        </Typography>
      </div>
    </section>
  );
};
export default EstateDetails;
