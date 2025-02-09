import { React } from "react";
import Navbar from "@/components/Navbar";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const Home = () => {
  const data = {
    sub_heading: "watch.  connect.  communicate.",
    size: "text-5xl",
  };
  return (
    <div className="home-container h-full  w-full  flex flex-col absolute dark:bg-grid-[#e11d48]/[0.3] bg-grid-[#e11d48]/[0.3] ">
      <Navbar />
      <header className="heading-container  h-2/3 w-full flex flex-col justify-center items-center ">
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-foreground dark:text-foreground flex items-center space-x-2"
        >
          <span>Where streaming meets talking 🔥</span>
        </HoverBorderGradient>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="heading w-fit  text-center">
          <h1 className="text-9xl text-foreground">FlixChat</h1>
          <TextGenerateEffect
            textSize={data.size}
            duration={1.5}
            words={data.sub_heading}
          />
        </div>
      </header>
      <section className="features z-50">

      </section>
    </div>
  );
};

export default Home;
