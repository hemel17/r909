import { useLoaderData } from "react-router-dom";
import Estates from "../../components/Estates/Estates";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  const estates = useLoaderData();

  return (
    <section>
      <Slider />
      <Estates estates={estates} />
    </section>
  );
};
export default Home;
