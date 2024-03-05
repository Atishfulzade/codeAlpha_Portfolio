import React from "react";
import { Tilt } from "react-tilt";
import { styles } from "../style";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { staggerContainer } from "../utils/motion";

import { projects } from "../constants";
import { github, browser } from "../assets";
const ProjectCard = ({ project }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", project.index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="inset-0 absolute flex justify-end m-3 gap-2 card-img_hover">
            <div
              className="black-gradient w-10 h-10 rounded-full justify-center flex items-center cursor-pointer"
              title="Github link"
              onClick={() => {
                window.open(project.source_code_link, "_blank");
              }}
            >
              <img
                src={github}
                alt="github"
                className="w-3/4
               h-3/4 "
              />
            </div>
            <div
              className="black-gradient w-10 h-10 rounded-full justify-center flex items-center cursor-pointer"
              title="Deploy link"
              onClick={() => {
                window.open(project.deploy_link, "_blank");
              }}
            >
              <img src={browser} alt="browser" className="w-3/4 h-3/4 " />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="font-bold text-white text-[24px]">{project.name}</h3>
          <p className="mt-2 text-secondary text-[14px] line-clamp-4 hover:line-clamp-none">
            {project.description}
          </p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
const Works = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>My Work</p>
        <h1 className={styles.heroHeadText}>Project</h1>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn(",", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through real
          world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems different technologies and manage
          projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
      <span className="hash-span">&nbsp;</span>
    </motion.section>
  );
};

export default Works;
