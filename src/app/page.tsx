import Navbar from "@/components/layouts/navbar";
import Section__HomeHero from "./_utils/components/hero.section";
import Section__Privacy from "./_utils/components/privacy.section";
import Section__Monitor from "./_utils/components/monitor.section";
import Section__Knowledge from "./_utils/components/knowledge.section";
import Section__Autonomy from "./_utils/components/autonomy.section";
import Section__Patent from "./_utils/components/patent-section";

const Home = () => {
  return (
    <>
      <Navbar color="white" />
      <Section__HomeHero />
      <Section__Privacy />
      <Section__Monitor />
      <Section__Knowledge />
      <Section__Autonomy />
      <Section__Patent />
    </>
  );
};

export default Home;
