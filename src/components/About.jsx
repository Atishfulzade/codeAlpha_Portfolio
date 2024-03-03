import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { staggerContainer } from "../utils/motion";
import { Link } from "react-router-dom";
import { github } from "../assets";
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-12 flex flex-col justify-evenly items-center min-h-[280px] transition"
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="font-bold text-white text-center text-[20px] ">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>About</p>
        <h1 className={styles.heroHeadText}>Overview</h1>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a passionate and dedicated newcomer to the world of frontend
        development. Armed with a strong foundation in HTML, CSS, and
        JavaScript, I'm eager to embark on this exciting journey of crafting
        visually appealing and user-friendly websites.
      </motion.p>
      <div className="flex gap-10 flex-wrap mt-20 mb-20 ">
        {services.map((services, index) => (
          <ServiceCard key={services.title} index={index} {...services} />
        ))}
      </div>
      <a
        href={github}
        download="Atish Fulzade.pdf"
        className="bg-tertiary  py-3 px-8 outline-none border-none font-bold text-white shadow-lg w-fit shadow-primary rounded-lg "
      >
        Download Resume
      </a>
      <span className="hash-span">&nbsp;</span>
    </motion.section>
  );
};

export default About;
