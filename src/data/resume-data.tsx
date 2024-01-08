import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Malo Lebrin",
  initials: "MJ",
  location: "Nantes, France, FRA",
  locationLink: "https://www.google.com/maps/place/Nantes/@47.2383198,-1.6427342,12z/data=!3m1!4b1!4m6!3m5!1s0x4805ee81f0a8aead:0x40d37521e0ded30!8m2!3d47.218371!4d-1.553621!16zL20vMGhxenI?entry=ttu",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "As a Full Stack Engineer, I work mostly with TypeScript, React, Node.js, Adonis, Vue, Nuxt, Astro, and GraphQL. I have over 3 years of experience in working remotely with companies.",
  avatarUrl: "https://avatars.githubusercontent.com/u/55061197?v=4",
  // personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "malolebrin@gmail.com",
    tel: "+33646830564",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/MaloLebrin",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/malo-lebrin-%F0%9F%92%BB-54a084110/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/LebrinM",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "The Reactor",
      degree: "Full Stack Developer bootcamp",
      start: "2020",
      end: "2020",
    },
    {
      school: "Master's Degree in Psychology at University of Nantes",
      degree: "Master's Degree in social Psychology",
      start: "2012",
      end: "2018",
    },
  ],
  work: [
    {
      company: "Zenika",
      link: "https://www.zenika.com/",
      badges: [],
      title: "Full Stack Developer",
      start: "2022",
      end: "Now",
      description:
        "Implemented new features, worked on improving and automating customers' daily work. Technologies: React, TypeScript, GraphQL, Nodejs, Adonis, Vue, Nuxt, Astro",
    },
    {
      company: "Kissmy",
      link: "https://www.kissmy.co/fr",
      badges: [],
      title: "Front End Developer",
      start: "2021",
      end: "2022",
      description:
        "Implemented new features, worked on improving UX and UI, started migration from JS to TS and more. Technologies: TypeScript, Vue, Nuxt",
    },
    {
      company: "Akanthas",
      link: "https://www.akanthas.com/",
      badges: ["remote"],
      title: "Full Stack Developer",
      start: "2020",
      end: "2020",
      description:
        "Mobile app creation (in React Native for iOS and Android) to locate industrial containers by scanning a QR, Web app creation (React) for industrial container fleet management. Creation of a server (Nodejs mongoDB) to manage, store, add, locate industrial containers connected to a mobile app and a web app",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "GraphQL",
    "Astro",
    "Vue/Nuxt",
    "Tailwind CSS",
  ],
  projects: [
    {
      title: "Be Right",
      techStack: [
        "Side Project",
        "TypeScript",
        "Nuxtjs",
        "Vite",
        "Tailwind CSS",
        "Nodejs",
        "Docker",
      ],
      description: "A platform to manage Image rights",
      link: {
        label: "be-right.co",
        href: "https://be-right.co/",
      },
    },
    {
      title: "Pinia-Entity-Store",
      techStack: [
        "Side Project",
        "TypeScript",
        "Pinia",
        "Vite",
        "Vitest",
        "Vue",
      ],
      tags: ['Open Source'],
      description: "A lightweight Pinia plugin to manage relational entities in Pinia without having to learn a whole new ORM",
      link: {
        label: "be-right.co",
        href: "https://github.com/MaloLebrin/pinia-entity-store",
      },
    },
    {
      title: "Zinzin de Zing",
      techStack: [
        "TypeScript",
        "Astro",
      ],
      description: "A static website to showcase the incredible work of a roofer",
      link: {
        label: "be-right.co",
        href: "https://zinzin-du-zing.fr/",
      },
    },
  ],
} as const;
