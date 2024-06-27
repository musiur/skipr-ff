import Navbar from "@/components/layouts/navbar";
import Section__HomeHero from "./_utils/components/hero.section";
import Section__Privacy from "./_utils/components/privacy.section";

const Home = () => {
  return (
    <>
      <Navbar color="white" />
      <Section__HomeHero />
      <Section__Privacy />
      <p className="text-8xl font-bold container section">
        Occaecat est dolor eiusmod ad culpa eiusmod in amet consequat quis.
        Dolor nulla dolore et in quis laboris. Laboris eu do sunt anim ad minim
        nostrud cillum ad. Officia sit nisi quis elit incididunt incididunt sunt
        et minim dolore est.
      </p>
    </>
  );
};

export default Home;
