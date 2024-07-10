import Navbar from "@/components/layouts/navbar";
import Section__Hero from "./_utils/hero.section";
import Section__Credential from "./_utils/credential.section";
import Section__Autonomous from "./_utils/autonomous.section";
import Section__Burner from "./_utils/burner.section";
import Section__Last from "./_utils/last.section";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "The Skipr Scoop",
  description: "Generated by create next app",
  keywords: "The Skipr Scoop",
  openGraph: {
    images: [
      {
        url: "https://w3mantra.com/skipr_wp/wp-content/uploads/2021/10/Group-1.png",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
      },
    ],
  },
};

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

export default dynamic(() => Promise.resolve(Page), { ssr: false });
