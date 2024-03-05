import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-hero-pattern bg-cover bg-no-repeat z-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[190px] md:top-[220px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col mt-5 justify-center items-center ">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-[80px] sm:h-[100px] violet-gradient" />
        </div>
        <div>
          <h1
            className={`${styles.heroHeadText}text-[#915eff] flex ;gap-2 w-full whitespace-nowrap `}
          >
            Hi I'm&nbsp;
            <span className="text-[#915eff]">Atish</span>&nbsp;
            <span className="text-[#915eff] hidden md:block">Fulzade</span>
          </h1>
          <p className={`${styles.heroSubText}`}>Frontend Developer</p>
          <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
            I bring together the realms of design and code to craft elegant and
            user-centric solutions. With an unwavering dedication to my craft, I
            strive to push the boundaries of creativity while maintaining a
            focus on simplicity and usability.
          </p>
        </div>
      </div>

      <div className="absolute  xs:bottom-10 bottom-11 w-full flex justify-center items-start p-2">
        <div
          onClick={() => {
            scrollTo(0, 650);
          }}
        >
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
