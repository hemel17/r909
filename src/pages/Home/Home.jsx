import { useLoaderData } from "react-router-dom";
import Estates from "../../components/Estates/Estates";
import Slider from "../../components/Slider/Slider";
import { Helmet } from "react-helmet";

const Home = () => {
  const estates = useLoaderData();

  return (
    <section>
      <Helmet>
        <title>Sweet Home</title>
      </Helmet>
      <Slider />
      <Estates estates={estates} />
    </section>
  );
};
export default Home;
