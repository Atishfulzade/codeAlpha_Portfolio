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
  instagram,
  github,
  linkedin,
  facebook,
  codealpha,
  resumebuilder,
  playtube,
  meeshio,
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
    name: "PlayTube",
    description:
      "PlayTube is a React project inspired by the popular YouTube video application. This project showcases features such as video listing, playback, login, signup, video watchlist, and video recommendations.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
      {
        name: "firebase",
        color: "yellow-text-gradient",
      },
    ],
    image: playtube,
    source_code_link: "https://github.com/Atishfulzade/playtube.git",
    deploy_link: "https://playtubevid.netlify.app/",
  },
  {
    name: "Meeshio",
    description:
      "Meeshio is a clone of the popular e-commerce platform Meesho. The application is designed to provide users with a seamless online shopping experience, featuring product listings, cart management, user authentication, and more.",
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
    image: meeshio,
    source_code_link: "https://github.com/Atishfulzade/meeshio.git",
    deploy_link: "https://meeshio.vercel.app/",
  },
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
];

export { services, technologies, experiences, projects, social };
