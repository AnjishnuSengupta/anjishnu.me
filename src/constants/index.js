import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  java,
  python,
  flutter,
  nodejs,
  git,
  demo,
  carrent,
  jobit,
  tripguide,
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Student",
    icon: web,
  },
  {
    title: "Open Source Contributor",
    icon: creator,
  }
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "Tech Startup",
    icon: demo,
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Developed responsive web applications using React.js and modern JavaScript (ES6+)",
      "Collaborated with design team to implement pixel-perfect UI components",
      "Optimized application performance and improved loading times by 30%",
      "Participated in code reviews and followed agile development methodologies",
      "Gained experience with version control using Git and collaborative development workflows",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Freelance Projects",
    icon: demo,
    iconBg: "#E6DEDD",
    date: "September 2023 - Present",
    points: [
      "Built full-stack web applications using React, Node.js, and MongoDB",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Developed RESTful APIs and integrated third-party services",
      "Created interactive 3D experiences using Three.js and React Three Fiber",
      "Delivered projects on time while maintaining high code quality standards",
    ],
  },
  {
    title: "Open Source Contributor",
    company_name: "Various Projects",
    icon: demo,
    iconBg: "#383E56",
    date: "January 2024 - Present",
    points: [
      "Contributed to multiple open-source React and JavaScript projects on GitHub",
      "Fixed bugs, improved documentation, and added new features",
      "Collaborated with developers worldwide using Git and GitHub workflows",
      "Learned best practices for clean, maintainable code",
      "Built a strong portfolio showcasing diverse technical skills",
    ],
  },
];

// Testimonials section removed - replace with real testimonials when available
const testimonials = [];

const projects = [
  {
    name: "Personal Portfolio",
    description:
      "A modern, interactive portfolio website built with React and Three.js. Features 3D animations, responsive design, and a working contact form. Showcases my skills in frontend development and creative web design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/AnjishnuSengupta/anjishnu.me",
  },
  {
    name: "E-Commerce Platform",
    description:
      "A full-stack e-commerce web application with user authentication, product catalog, shopping cart, and payment integration. Built with React frontend and Node.js backend with MongoDB database.",
    tags: [
      {
        name: "react",
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
    ],
    image: jobit,
    source_code_link: "https://github.com/AnjishnuSengupta/ecommerce-app",
  },
  {
    name: "Weather Dashboard",
    description:
      "A responsive weather application that provides current weather conditions and forecasts. Features location-based weather data, interactive charts, and a clean, intuitive user interface.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/AnjishnuSengupta/weather-dashboard",
  },
];

export { services, technologies, experiences, testimonials, projects };
