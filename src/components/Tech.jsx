import React from "react";
import { technologies } from "../constants";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { styles } from "../style";
const Tech = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <div className="flex  flex-row justify-center flex-wrap gap-12">
        {technologies.map((technology) => (
          <Tilt
            className="h-24 w-24 justify-center items-center green-pink-gradient rounded-[20px] p-[1px]"
            key={technology.name}
          >
            <div className="bg-tertiary rounded-[20px] p-3">
              <img src={technology.icon} alt={technology.name} />
            </div>
          </Tilt>
        ))}
      </div>
      <span className="hash-span">&nbsp;</span>
    </motion.section>
  );
};

export default Tech;
