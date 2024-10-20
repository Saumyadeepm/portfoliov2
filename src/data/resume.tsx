import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import React from 'react';

type Project = {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  links: { type: string; href: string; icon: React.ReactNode }[];
  image?: string;
  video?: string;
};

export const DATA = {
  name: "Saumyadeep Mitra",
  initials: "SM",
  url: "https://saumyadeepmitra.com", // You may want to replace this with your actual website if you have one
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/pune",
  description:
      "Data Science student with experience in Machine Learning, Deep Learning, and Full-Stack Development. Passionate about applying AI to solve real-world problems.",
  summary:
      "I'm a Bachelor of Science in Data Science student at CHRIST UNIVERSITY, graduated in June 2024. I have experience in various areas of data science and software development, including machine learning, deep learning, and full-stack web development. I've completed internships at the Indian Space Research Organization and Nehru Arts and Science College(in collaboration with ICAR), where I worked on projects involving National Health Resource Repository data analysis and disease detection using deep learning.",
  avatarUrl: "/me.jpg", // You may want to replace this with your actual avatar image
  skills: [
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "SQL",
    "Machine Learning",
    "Deep Learning",
    "AWS",
    "Docker",
    "Kubernetes",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "saumyadeepmitra.12@gmail.com",
    tel: "+918638080904",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Saumyadeepm", // Replace with your actual GitHub URL
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saumyadeepmitra/", // Replace with your actual LinkedIn URL
        icon: Icons.linkedin,
        navbar: true,
      },
      // You can add or remove social media profiles as needed
    },
  },

  work: [
    {
      company: "Indian Space Research Organization",
      href: "https://www.isro.gov.in/",
      badges: [],
      location: "Jodhpur",
      title: "Project Trainee",
      logoUrl: "/isro-logo.png", // Replace with actual ISRO logo
      start: "January 2024",
      end: "April 2024",
      description: (
          <>
            • Identified 12 parameters for detecting health disparities in Indian healthcare (NHRR).<br/>
            • Analyzed healthcare datasets, improving resource allocation by 15% and identifying equipment
            disparities.<br/>
            • Delivered insights enhancing healthcare service accessibility by 25%.<br/>
            • Suggested improvements resulting in a projected 30% increase in healthcare service accessibility.<br/>
          </>
      ),
    },
    {
      company: "Nehru Arts and Science College",
      href: "https://naschybd.edu.in/", // Replace with actual college website
      badges: [],
      location: "Hyderabad",
      title: "Research Intern",
      logoUrl: "/nasc-logo.png", // Replace with actual college logo
      start: "July 2023",
      end: "September 2023",
      description: (<>
            • Spearheaded a project titled Red Rot Disease Detection Using Deep Learning funded by ICAR.<br/>
            • Trained a CNN model achieving an accuracy improvement of 20%.Developed a user-friendly web application, resulting in a 30% faster detection rate of Red Rot Disease in sugarcane Leaves.<br/>
            • Designed and optimized the application for accessibility on various devices, increasing user engagement by 40%.<br/>
          </>
      ),
    },
    {
      company: "CHRIST UNIVERSITY",
      href: "https://christuniversity.in/",
      badges: [],
      location: "Pune",
      title: "Research Intern",
      logoUrl: "/christ-logo.png", // Replace with actual university logo
      start: "August 2022",
      end: "September 2022",
      description: (
          <>
            • Performed data analysis with SQL and Python, yielding a significant 25% enhancement in data precision.<br/>
            • Developed user interfaces and applications, automating data interpretation and insights extraction, reducing
            processing time by 30%.
          </>
      ),
    },
  ],
  education: [
    {
      school: "CHRIST UNIVERSITY",
      href: "https://christuniversity.in/",
      degree: "Bachelor of Science in Data Science",
      logoUrl: "/christ-logo.png",
      start: "2021",
      end: "2024",
      description: (
          <>
            <u><i>Relevant Courses</i></u> - <i>Data Structures &amp; Algorithms, Machine Learning, Deep Learning, DBMS,
            Cloud Computing</i>
          </>
      ),
    },
  ],
  projects: [
    {
      title: "Interactive Web Interface for LLM Models",
      href: "https://github.com/yourusername/llm-interface",
      dates: "Aug 2024 - Sep 2024",
      active: true,
      description:
          "Developed a ChatGPT-like web interface using React and Node.js, integrating 8 LLM models via Ollama. Implemented real-time response streaming, reducing average response time by 30%. Optimized load time by 40% and reduced server resource usage by 25% via efficient Docker deployment.",
      technologies: [
        "React",
        "Node.js",
        "Docker",
        "Kubernetes",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/yourusername/llm-interface",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: undefined,
      video: undefined,
    },
    {
      title: "Traffic Light Control Optimization",
      href: "https://github.com/yourusername/traffic-optimization", // Replace with actual project link
      dates: "Nov 2023 - Dec 2024",
      active: true,
      description:
          "Developed a Reinforcement Learning model to optimize traffic light timing, reducing average wait times by 27% in simulated urban environments. Improved traffic flow efficiency by 35% during peak hours. Implemented a Deep Q-Network (DQN) algorithm, training it on 100+ simulation episodes.",
      technologies: [
        "Python",
        "PyTorch",
        "SUMO",
        "Reinforcement Learning",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/yourusername/traffic-optimization", // Replace with actual GitHub link
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: undefined,
      video: undefined,
    },
    {
      title: "Automobiles E-Commerce Website",
      href: "https://github.com/yourusername/auto-ecommerce", // Replace with actual project link
      dates: "Sep 2023 - Nov 2023",
      active: true,
      description:
          "Designed and developed a full-stack platform for vehicle sales, enabling users to browse, compare, and purchase over 500+ car models. Implemented secure payment integration and achieved a 30% improvement in page load times.",
      technologies: [
        "Node.js",
        "React",
        "PostgreSQL",
        "Redis",
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/yourusername/auto-ecommerce", // Replace with actual GitHub link
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: undefined,
      video: undefined,
    },
  ] as Project[],
} as const;