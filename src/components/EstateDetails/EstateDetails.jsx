import { useParams } from "react-router-dom";

const EstateDetails = () => {
  const { esID } = useParams();

  const estateID = Number(esID);
  console.log(estateID);

  return <div>EstateDetails : {estateID}</div>;
};
export default EstateDetails;
