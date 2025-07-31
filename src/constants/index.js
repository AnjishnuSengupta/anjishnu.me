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
  nyanime,
  Dayli,
  Jarvis,
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
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "AI/ML Enthusiast",
    icon: mobile,
  },
  {
    title: "Open Source Contributor",
    icon: creator,
  },
  {
    title: "Software Engineering Student",
    icon: web,
  }
];

const technologies = [
  {
    name: "Python",
    icon: python,
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
    name: "Node JS",
    icon: nodejs,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Software Engineering Student",
    company_name: "University/College",
    icon: demo,
    iconBg: "#383E56",
    date: "2023 - Present",
    points: [
      "Mastering computer science fundamentals including advanced data structures, algorithm optimization, and software architecture design patterns",
      "Developing expertise in multiple programming paradigms including object-oriented, functional, and asynchronous programming",
      "Building comprehensive personal projects spanning web development, AI/ML, automation, and mobile applications",
      "Contributing to open-source projects and maintaining a strong GitHub portfolio with consistent commit history",
      "Actively participating in coding competitions, tech festivals like Jaco Tech Fest, and developer community events",
      "Staying current with emerging technologies and industry best practices through continuous learning and experimentation",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Personal Projects & Freelance",
    icon: demo,
    iconBg: "#E6DEDD",
    date: "2024 - Present",
    points: [
      "Architected and developed NyAnime - a sophisticated anime streaming platform with real-time web scraping, advanced search algorithms, and responsive design",
      "Built Dayli - an innovative couples journaling application featuring MongoDB backend, real-time synchronization, and intuitive React Native UI components",
      "Engineered Jarvis - an intelligent AI desktop assistant with advanced voice recognition, multi-platform AI integration, and automated task management",
      "Implemented pixel-perfect responsive designs using modern frameworks including React, TypeScript, Tailwind CSS, and Next.js",
      "Integrated and optimized multiple database solutions including MongoDB, Firebase, and PostgreSQL for high-performance scalable applications",
      "Deployed applications using cloud platforms with CI/CD pipelines for automated testing and deployment workflows",
    ],
  },
  {
    title: "AI & Automation Specialist",
    company_name: "Independent Research & Development",
    icon: demo,
    iconBg: "#383E56",
    date: "2024 - Present",
    points: [
      "Developed advanced web scraping systems with Cloudflare bypass technology, JavaScript execution, and anti-detection mechanisms",
      "Created AI-powered career guidance platform with machine learning algorithms for personalized career path recommendations",
      "Implemented sophisticated automation workflows using Selenium WebDriver, Python scripting, and browser automation technologies",
      "Integrated multiple cutting-edge AI APIs including OpenAI ChatGPT, Google Bard, Pi.ai, and custom neural network models",
      "Built intelligent content aggregation systems with natural language processing for enhanced user experience optimization",
      "Researched and implemented machine learning algorithms for data analysis, pattern recognition, and predictive modeling applications",
    ],
  },
];

// Testimonials section removed - replace with real testimonials when available
const testimonials = [];

const projects = [
  {
    name: "NyAnime",
    description:
      "A comprehensive anime streaming platform built with React and TypeScript. Features include advanced search with intelligent filtering, detailed anime information with ratings and reviews, episode tracking with progress synchronization, and a fully responsive design optimized for all devices. Integrates with multiple anime databases for up-to-date content and real-time updates.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "api-integration",
        color: "orange-text-gradient",
      },
    ],
    image: nyanime,
    source_code_link: "https://github.com/AnjishnuSengupta/nyanime",
  },
  {
    name: "Dayli",
    description:
      "An innovative couples journaling application designed to strengthen relationships through shared digital experiences. Built with modern web technologies featuring real-time synchronization, interactive mood tracking with analytics, secure data encryption, and intuitive UI/UX design. Includes features like memory timelines, shared photo galleries, and relationship milestone tracking.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "real-time",
        color: "orange-text-gradient",
      },
    ],
    image: Dayli,
    source_code_link: "https://github.com/AnjishnuSengupta/Dayli",
  },
  {
    name: "Jarvis AI Assistant",
    description:
      "A sophisticated AI-powered personal assistant built with Python, featuring advanced voice recognition, natural text-to-speech synthesis, and intelligent conversation capabilities. Includes task automation, intelligent web searching, weather updates, news briefings, calendar management, and highly customizable response patterns for enhanced daily productivity and seamless user interaction.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "nlp",
        color: "pink-text-gradient",
      },
      {
        name: "voice-recognition",
        color: "orange-text-gradient",
      },
    ],
    image: Jarvis,
    source_code_link: "https://github.com/AnjishnuSengupta/Jarvis",
  },
];

export { services, technologies, experiences, testimonials, projects };
