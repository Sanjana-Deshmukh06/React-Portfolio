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
  docker,
  java,
  sql,
  avipl,
  websoft,
  project1,
  triptribe,
  tictac,
  portfolio,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Stack Developer",
    icon: web,
  },
  {
    title: "Software Programmer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: sql,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "WebSoft Infotech",
    icon: websoft,
    iconBg: "#383E56",
    date: "January 2024 - July 2024",
    points: [
      "Developed a MERN stack-based online learning portal, improving user engagement by 25% and platform security for 1,000+ users.",
      "Integrated RESTful APIs, reducing data retrieval time by 40%, and decreasing errors by 30%.",
      "Collaborated cross-functionally, delivering the project two weeks ahead of schedule"
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "AVIPL",
    icon: avipl,
    iconBg: "#E6DEDD",
    date: "June 2021 - January 2022",
    points: [
      "Led the Codesandbots project, teaching kids coding and robotics, utilizing the MERN stack, and managing a team of 24 members.",
      "Successfully delivered the project on schedule despite COVID-19 challenges,with the homepage design completed in just 3 days.",
      "Oversaw 24 members across frontend, backend, and design, achieving all project goals."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "TripTribe",
    description:"TripTribe is a full-stack web application, built using the MERN stack with EJS for templating.The platform allows users to explore, book, and list accommodations with ease. I implemented API-based login authentication to ensure secure and seamless user access.",
    tags: [
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "MERN",
        color: "green-text-gradient",
      },
      {
        name: "EJS",
        color: "pink-text-gradient",
      },
    ],
    image: triptribe,
    source_code_link: "https://trip-tribe.onrender.com/listings",
  },
  {
    name: "My Portfolio",
    description:"This portfolio website is a comprehensive showcase of my expertise in MERN stack technologies.Built with Tailwind CSS for a modern and responsive design, it also integrates a 3D canvas using Three.js, adding an interactive dimension to the user experience.",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "",
  },
  {
    name: "Tic Tac Toe",
    description:"This Tic-Tac-Toe project is a simple, interactive web-based game developed using JavaScript, HTML, and Vanilla CSS.The game features a clean and responsive design, allowing two players to compete with real-time updates on the game board.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "Vanila CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tictac,
    source_code_link: "https://sanjana-deshmukh06.github.io/Tic-Tac-Toe/",
  },
];

export { services, technologies, experiences, testimonials, projects };