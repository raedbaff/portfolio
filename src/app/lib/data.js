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
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: "/portfolio/ecommerce.png",
  },
  {
    title: "Social Media website",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
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
