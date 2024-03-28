import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  whiteFusionboard,
  instagram,
  github,
  linkedin,
  facebook,
  codealpha,
  textEditor,
  resumebuilder,
} from "../assets";

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];
const social = [
  {
    name: "Github",
    icon: github,
    link: "https://github.com/Atishfulzade",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://linkedin.com/in/atishfulzade",
  },
  {
    name: "Instagram",
    icon: instagram,
    link: "https://instagram.com/atishfulzade",
  },
  {
    name: "Facebook",
    icon: facebook,
    link: "https://www.facebook.com/atish.fulzade.9/",
  },
];
const experiences = [
  {
    title: "Web Developer",
    company_name: "Codealpha",
    icon: codealpha,
    iconBg: "#383E56",
    date: "March 2024 - April 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Resume builder",
    description:
      "This interactive resume builder lets you craft impactful resumes in minutes. Built with React, Redux, and Tailwind CSS, it offers a seamless experience, stunning designs, and downloadable formats  ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "redux",
        color: "green-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: resumebuilder,
    source_code_link: "https://github.com/Atishfulzade/resume_builder.git",
    deploy_link: "https://resume-builder-blush-beta.vercel.app/",
  },

  {
    name: "WhiteBoardFusion",
    description:
      "A collaborative whiteboard application that enables real-time drawing and annotation. implemented features for seamless collaboration and interactive drawing experiences with login,register with authentication",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    image: whiteFusionboard,
    source_code_link: "https://github.com/Atishfulzade/whitefusionboard.git",
    deploy_link: "https://whitefusionboard-lp2g.vercel.app/",
  },
];

export { services, technologies, experiences, projects, social };
