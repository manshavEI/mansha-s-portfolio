import tamagochiImage from "../assets/projects/tamagochi.svg";
import craftFolioImage from "../assets/projects/craftfolio.svg";
import commentModerationImage from "../assets/projects/comment-moderation.svg";
import taskFlowImage from "../assets/projects/taskflow.svg";

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Highlights", href: "#highlights" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const roles = ["Software Developer", "Web Developer"];

export const skillCarousel = [
  { name: "React.js", icon: "bx bxl-react" },
  { name: "Next.js", icon: "bx bx-code-block" },
  { name: "JavaScript", icon: "bx bxl-javascript" },
  { name: "TypeScript", icon: "bx bxl-typescript" },
  { name: "Python", icon: "bx bxl-python" },
  { name: "Node.js", icon: "bx bxl-nodejs" },
  { name: "SQL", icon: "bx bx-data" },
  { name: "Git", icon: "bx bxl-git" },
  { name: "GitHub", icon: "bx bxl-github" },
  { name: "REST APIs", icon: "bx bx-transfer-alt" },
  { name: "Tailwind CSS", icon: "bx bx-wind" },
  { name: "Power BI", icon: "bx bx-bar-chart-alt-2" },
  { name: "Machine Learning", icon: "bx bx-brain" },
  { name: "AI Applications", icon: "bx bx-bot" },
];

export const featureStats = [
  {
    value: "04",
    label: "Featured projects",
    detail: "Across web, AI, data, and interactive experiences",
    icon: "bx bx-rocket",
  },
  {
    value: "02",
    label: "Collaborative builds",
    detail: "Contributing design thinking and application logic",
    icon: "bx bx-git-branch",
  },
  {
    value: "03",
    label: "Core disciplines",
    detail: "Software development, data analytics, and UI/UX",
    icon: "bx bx-shape-circle",
  },
  {
    value: "IN",
    label: "Based in India",
    detail: "Open to remote opportunities and global collaboration",
    icon: "bx bx-map",
  },
];

export const projects = [
  {
    title: "Tamagochi",
    eyebrow: "Collaborative game project",
    description:
      "A browser-based virtual pet experience centered on caring for Mori. I contributed to the product's visual design and gameplay logic, helping shape expressive care interactions and a playful, approachable experience.",
    technologies: ["React", "TypeScript", "Three.js", "Game Logic"],
    image: tamagochiImage,
    imageAlt: "Real Tamagochi game interface featuring Mori and care controls",
    number: "01",
    accent: "linear-gradient(135deg, #ff8da1, #8d6df4 55%, #55d7e8)",
    repository: "https://github.com/Tech-aficionado/Tamagochi---Open-Source-Game",
  },
  {
    title: "CraftFolio",
    eyebrow: "Open-source portfolio library",
    description:
      "A Minecraft-inspired React portfolio library that turns developer data into an interactive voxel experience, complete with 3D worlds, data-driven sections, and an accessible day-and-night theme.",
    technologies: ["React", "TypeScript", "Three.js", "Framer Motion"],
    image: craftFolioImage,
    imageAlt: "Official CraftFolio Minecraft-themed project preview",
    number: "02",
    accent: "linear-gradient(135deg, #567d46, #8dac61 48%, #76513a)",
    repository:
      "https://github.com/Tech-aficionado/CraftFolio---Open-Sourced-Minecraft-Portfolio-Library",
  },
  {
    title: "Smart Social Media Comment Moderation",
    eyebrow: "AI & data application",
    description:
      "An AI-powered desktop application that analyzes YouTube comments with NLP, classifies sentiment, flags harmful content, visualizes moderation insights, and exports structured Excel reports.",
    technologies: ["Python", "NLP", "Pandas", "Data Visualization"],
    image: commentModerationImage,
    imageAlt: "Real desktop dashboard from the comment moderation application",
    number: "03",
    accent: "linear-gradient(135deg, #2764d8, #6c5ce7 55%, #43c6ac)",
    repository:
      "https://github.com/manshavEI/Smart-social-media-comment-moderation-system",
  },
  {
    title: "TaskFlow To-do",
    eyebrow: "AI-powered productivity",
    description:
      "A modern task manager with natural-language task creation, AI-assisted task breakdown, drag-and-drop ordering, responsive filtering, and an interface designed for focused planning.",
    technologies: ["JavaScript", "Claude API", "SortableJS", "Bootstrap"],
    image: taskFlowImage,
    imageAlt: "Real TaskFlow application dashboard with lists and task controls",
    number: "04",
    accent: "linear-gradient(135deg, #5f52d8, #8a6cf4 52%, #5bc7dc)",
    repository: "https://github.com/manshavEI/taskflow-todo",
  },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mansha-verma14/",
    icon: "bx bxl-linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/manshavEI",
    icon: "bx bxl-github",
  },
  {
    label: "Email",
    href: "mailto:vermamansha75@gmail.com",
    icon: "bx bx-at",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/scribble.with.lyynnn?igsh=aGJkN3JueHp0OHRq",
    icon: "bx bxl-instagram",
  },
];
