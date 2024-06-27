import Navbar from "@/components/layouts/navbar";
import Section__HomeHero from "./_utils/components/hero.section";
import Section__Privacy from "./_utils/components/privacy.section";
import Section__Monitor from "./_utils/components/monitor.section";

const Home = () => {
  return (
    <>
      <Navbar color="white" />
      <Section__HomeHero />
      <Section__Privacy />
      <Section__Monitor />
    </>
  );
};

export default Home;
