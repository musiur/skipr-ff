import Navbar from "@/components/layouts/navbar";
import Section__Hero from "./_utils/hero.section";
import Section__Credential from "./_utils/credential.section";
import Section__Autonomous from "./_utils/autonomous.section";
import Section__Burner from "./_utils/burner.section";
import Section__Last from "./_utils/last.section";

const Page = () => {
  return (
    <>
      <Navbar color="black" />
      <Section__Hero />
      <Section__Credential />
      <Section__Autonomous />
      <Section__Burner />
      <Section__Last />
    </>
  );
};

export default Page;
