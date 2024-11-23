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
  signup,
  sp2,
  sp3,
  sp4
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
  {
    id:"cv",
    title:"Resume"
  }
];

const services = [
  {
    title: "MERN Stack Developer",
    icon: reactjs,
  },
  {
    title: "Software Programmer",
    icon: sp4,
  },
  {
    title: "Web Developer",
    icon: sp2,
  },
  {
    title: "Frontend Developer",
    icon: sp3,
  },
];

const technologies = [
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: sql,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    description: "TripTribe is a full-stack web application, built using the MERN stack with EJS for templating.The platform allows users to explore, book, and list accommodations with ease. I implemented API-based login authentication to ensure secure and seamless user access.",
    tags: [
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "EJS",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "green-text-gradient",
      },
      {
        name: "RESTful API",
        color: "pink-text-gradient",
      },
    ],
    image: triptribe,
    source_code_link: "https://trip-tribe.onrender.com/listings",
  },
  {
    name: "My Portfolio",
    description: "This portfolio website is a comprehensive showcase of my expertise in MERN stack technologies.Built with Tailwind CSS for a modern and responsive design, it also integrates a 3D canvas using Three.js, adding an interactive dimension to the user experience.",
    tags: [
      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
      {
        name: "3D Animation",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "react-three-fiber",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://sanjana-deshmukh.netlify.app/",
  },
  {
    name: "Authentication Webpage",
    description: "This authentication module provides a seamless and secure user experience. Built using React and Tailwind CSS, it features a visually appealing design with responsive layouts.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "pink-text-gradient",
      },
      {
        name: "Responsive Design",
        color: "blue-text-gradient",
      },
      {
        name: "User Authentication",
        color: "pink-text-gradient",
      },
    ],
    image: signup,
    source_code_link: "https://authentication5.vercel.app/",
},

  {
    name: "Tic Tac Toe",
    description: "This Tic-Tac-Toe project is a simple, interactive web-based game developed using JavaScript, HTML, and Vanilla CSS.The game features a clean and responsive design, allowing two players to compete with real-time updates on the game board.",
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
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
      {
        name: "Grid-Layout",
        color: "green-text-gradient",
      },
    ],
    image: tictac,
    source_code_link: "https://sanjana-deshmukh06.github.io/Tic-Tac-Toe/",
  },
];

export { services, technologies, experiences, testimonials, projects };