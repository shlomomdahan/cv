import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Shlomo Dahan",
  initials: "SD",
  location: "Miami, FL. USA",
  locationLink: "https://www.google.com/maps/place/Miami",
  about:
    "Computer Science Master's student at the University of Pennsylvania. I am passionate about software development and am currently looking for an internship or a full-time position as a software engineer.",
  summary:
    "As a computer science student making the switch from finance to software development, I am passionate about creating software that is both functional and beautiful. I am a quick learner and am always looking for new challenges.",
  avatarUrl: "https://avatars.githubusercontent.com/u/64103471?v=4",
  personalWebsiteUrl: "https://shlomodahan.com",
  contact: {
    email: "shlomomdahan@gmail.com",
    tel: "+1 305-494-1570",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/shlomomdahan",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shlomomoshedahan/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "University of Pennsylvania",
      degree: "Master of Computer and Information Technology",
      start: "Jan 2023",
      end: "Dec 2024",
    },
    {
      school: "University of Miami",
      degree: "Bachelor of Business Administration in Finance",
      start: "Aug 2015",
      end: "Dec 2018",
    },
  ],
  work: [
    {
      company: "J.P. Morgan",
      link: "https://www.jpmorgan.com/",
      badges: [],
      title: "Private Bank Analyst",
      start: "2019",
      end: "2022",
      description:
        "Worked on a team of bankers to provide financial services to UHNW clients. Managed a portfolio of over $2 billion in assets.",
    },
  ],
  skills: [
    "Python",
    "Java",
    "JavaScript",
    "C",
    "C++",
    "React/Mext.js",
    "Flask",
    "Pymongo",
    "Tensorflow",
    "Pytorch",
    "Git",
    "Docker",
    "MongoDB",
    "NS3",
    "Postman",
  ],
  projects: [
    {
      title: "Shlomodahan.com",
      techStack: [
        "Side Project",
        "React",
        "Next.js",
        "TypeScript",
        "Framer Motion",
      ],
      description: "My personal website. Built with React and Next.js",
      link: {
        label: "github.com",
        href: "https://shlomodahan.com/",
      },
    },
    {
      title: "Pathfinding Visualizer",
      techStack: [
        "Side Project",
        "React",
        "Javascript",
        "Algorithms",
        "Data Structures",
      ],
      description: "Pathfinding visualizer built with React.",
      link: {
        label: "github.com",
        href: "https://pathfinding-visualizer-phi.vercel.app/",
      },
    },
  ],
} as const;
