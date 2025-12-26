import EventManagement from "../assets/projects/event-management.png";
export const projects = [
  {
    id: 1,
    title: "TEXTILIA",
    subtitle: "Garments Order & Track",
    description:
      "A full-stack system for managing garment orders, production workflows, and real-time status updates with role-based access control and Stripe payments.",
    techStack: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Firebase Auth",
      "JWT",
      "Stripe",
      "TailwindCSS",
      "Framer Motion",
    ],
    liveLink: "https://textilia-live-site.web.app",
    githubClient: "https://github.com/romanakhatun/textilia-client",
    githubServer: "https://github.com/romanakhatun/textilia-server",
    projectImage: EventManagement,
    large: true,
  },
  {
    id: 2,
    title: "BITE HUB",
    subtitle: "Food Review Platform",
    description:
      "A MERN stack community platform for food reviews, featuring search, filter, personalized favorites, and secure user access with Firebase.",
    techStack: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Firebase",
      "RESTful API",
    ],
    liveLink: "https://bitehub-live-site.web.app",
    githubClient: "https://github.com/romanakhatun/bitehub-client", // Replace
    githubServer: "https://github.com/romanakhatun/bitehub-server", // Replace
    projectImage: EventManagement, // Replace with your image
    large: false, // For Bento Grid layout
  },
  {
    id: 3,
    title: "DISHVENT",
    subtitle: "Food Event Management",
    description:
      "A Next.js platform for managing food items and events, with secure NextAuth authentication and dynamic API routes for CRUD operations.",
    techStack: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "NextAuth",
      "Tailwind CSS",
    ],
    liveLink: "https://dishvent-live-site.web.app", // Replace with actual live link
    githubClient: "https://github.com/romanakhatun/dishvent", // Assuming client/server in one repo for Next.js
    githubServer: null, // No separate server repo for Next.js
    projectImage: EventManagement, // Replace with your image
    large: false, // For Bento Grid layout
  },
];
