import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] ;

export const experiencesData = [
  {
    title: "Graduated from Polytechnique and ESSTHS",
    location: "Sousse",
    description:
      "I studied for 6 years after baccalaureat where i got my degree in STIC(Sciences et technologies de l'information et communication) and after that 3 more years in software engineering at polytechnique.",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2023",
  },
  {
    title: "Fullstack Developer at SAAD services",
    location: "Sousse, Sahloul",
    description:
      "I worked as a full-stack developer for 4 months using technologies like sails js RDF RDFS and apache fuseki for database. I gained valuable quick learning skills.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2023",
  },
  {
    title: "Full-Stack Developer at HPC GROUP / Ciris",
    location: "Sousse, Sidi Abd hmid",
    description:
      "My stack includes Sveltekit, Node js, TypeScript, SQL, Docker .... I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] ;

export const projectsData = [
  {
    title: "E-commerce website",
    description:
      "Developed a comprehensive eCommerce platform featuring user-friendly navigation , goal of this project was for me to learn the basics and principals of full-stack developpement.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: "/portfolio/ecommerce.png",
  },
  {
    title: "Social Media website",
    description:
      "Created an engaging social media app with real-time messaging, customizable profiles, news feeds, and robust privacy settings, designed to foster dynamic user interactions and community building.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: "/portfolio/social.jpg",
  },
  {
    title: "Medical Website (Medigest)",
    description:
      "This is a doctor management website where doctors can receive appointments and talk freely to their clients, I worked on this project for my graduation project inside polytechnique.",
    tags: ["Angular", "SpringBoot", "MySQL"],
    imageUrl: "/portfolio/medigest.PNG",
  },
  {
    title: "Modern Portfolio app",
    description:
      "Developed a sleek and responsive portfolio app showcasing my projects, skills, and experiences, complete with interactive elements, seamless navigation, and an intuitive user interface.",
    tags: ["Next js", "Typescript", "aceternity ui","Tailwind css"],
    imageUrl: "/portfolio/portfolio.PNG",
  },
] ;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Sveltkit",
  "Angular",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "SpringBoot",
  "MYSQL",
  "Express",
  "PostgreSQL",
  "Flutter",
  "Firebase",
  "Framer Motion",
  "Docker"
] ;
