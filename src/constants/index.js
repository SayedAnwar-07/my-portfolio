// Skills Section Logo's
import htmlLogo from "../assets/tech_logo/html.png";
import cssLogo from "../assets/tech_logo/css.png";
import javascriptLogo from "../assets/tech_logo/javascript.png";
import reactjsLogo from "../assets/tech_logo/reactjs.png";
import reduxLogo from "../assets/tech_logo/redux.png";
import tailwindcssLogo from "../assets/tech_logo/tailwindcss.png";
import materialuiLogo from "../assets/tech_logo/materialui.png";
import bootstrapLogo from "../assets/tech_logo/bootstrap.png";
import nodejsLogo from "../assets/tech_logo/nodejs.png";
import expressjsLogo from "../assets/tech_logo/express.png";
import mysqlLogo from "../assets/tech_logo/mysql.png";
import mongodbLogo from "../assets/tech_logo/mongodb.png";
import firebaseLogo from "../assets/tech_logo/firebase.png";
import pythonLogo from "../assets/tech_logo/python.png";
import gitLogo from "../assets/tech_logo/git.png";
import githubLogo from "../assets/tech_logo/github.png";
import vscodeLogo from "../assets/tech_logo/vscode.png";
import postmanLogo from "../assets/tech_logo/postman.png";
import mcLogo from "../assets/tech_logo/mc.png";
import netlifyLogo from "../assets/tech_logo/netlify.png";
import vercelLogo from "../assets/tech_logo/vercel.png";
import django from "../assets/tech_logo/django-icon.svg";
import wp from "../assets/tech_logo/wp.png";
import chatGPT from "../assets/tech_logo/chatGPT.png";
// import acf from "../assets/tech_logo/ACF.png";
// import contact_form from "../assets/tech_logo/contact_form.png";
// import elementor from "../assets/tech_logo/Elementor.png";
// import yoast from "../assets/tech_logo/Yoast_SEO.png";

// skills image
import neonstich from "../../public/assets/skill/NeonStich.png";
import blog from "../../public/assets/skill/Blog.png";
import jobPortal from "../../public/assets/skill/JobPortal.png";
import taken from "../../public/assets/skill/TAKE-N.png";
import gearovo from "../../public/assets/skill/Gearovo.png";

// Experience Section Logo's
import ph from "../../public/assets/logos/ph.png";
import ostad from "../../public/assets/logos/ostad.png";
import sorobindu from "../assets/company_logo/sorobindu.png";

export const myProjects = [
  {
    id: 1,
    title: "JobPortal",
    description:
      "A MERN-based job portal with role-based authentication and job listings.",
    subDescription: [
      "Developed a full-stack job portal using the MERN stack (MongoDB, Express.js, React, Node.js) with scalable architecture.",
      "Implemented role-based authentication for admins, recruiters, and job seekers using JWT and middleware.",
      "Built dynamic job listing and search features with filtering, sorting, and pagination.",
      "Integrated secure user registration, login, and profile management with form validation and bcrypt hashing.",
      "Designed a responsive, intuitive UI with Tailwind CSS to ensure a seamless experience across devices.",
    ],
    githubLink: "https://github.com/SayedAnwar-07/JobPortal",
    href: "",
    logo: "",
    image: jobPortal,
    tags: [
      {
        id: 1,
        name: "React Js",
        path: "/assets/tech_logo/reactjs.png",
      },
      {
        id: 2,
        name: "Redux",
        path: "/assets/tech_logo/redux.png",
      },
      {
        id: 3,
        name: "Express",
        path: "/assets/tech_logo/express.png",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/tech_logo/tailwindcss.png",
      },
    ],
  },
  {
    id: 2,
    title: "NeonStich (Cloths E-commerce)",
    description:
      "Built a feature-rich clothing e-commerce platform using the MERN stack with RESTful APIs for product and cart management.",
    subDescription: [
      "Built a feature-rich clothing e-commerce platform using the MERN stack with RESTful APIs for product and cart management.",
      "Integrated secure user authentication and authorization with JWT and role-based access for admins and customers.",
      "Implemented dynamic product filtering, category browsing, and a responsive shopping cart system.",
      "Integrated Stripe for secure online payments and managed order workflows with status tracking.",
      "Designed a mobile-friendly, modern UI with Tailwind CSS to enhance the shopping experience.",
    ],
    githubLink: "https://github.com/SayedAnwar-07/NeonStich",
    href: "",
    logo: "",
    image: neonstich,
    tags: [
      {
        id: 1,
        name: "React Js",
        path: "/assets/tech_logo/reactjs.png",
      },
      {
        id: 2,
        name: "Javascript",
        path: "/assets/tech_logo/javascript.png",
      },
      {
        id: 3,
        name: "Express",
        path: "/assets/tech_logo/express.png",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/tech_logo/tailwindcss.png",
      },
    ],
  },
  {
    id: 3,
    title: "Take-N (Accessories E-commerce)",
    description:
      "Developed an accessories e-commerce application using the MERN stack with modular and scalable code structure.",
    subDescription: [
      "Developed an accessories e-commerce application using the MERN stack with modular and scalable code structure.",
      "Implemented user and admin authentication with JWT, including access control for product and order management.",
      "Built advanced product filtering, search, and category-based navigation for seamless user experience.",
      "Integrated Stripe for secure payments and built an order management system with real-time status updates.",
      "Designed an elegant, responsive interface using Tailwind CSS, optimized for performance and mobile use.",
    ],
    githubLink: "https://github.com/SayedAnwar-07/Take-N",
    href: "",
    logo: "",
    image: taken,
    tags: [
      {
        id: 1,
        name: "React Js",
        path: "/assets/tech_logo/reactjs.png",
      },
      {
        id: 2,
        name: "Redux",
        path: "/assets/tech_logo/redux.png",
      },
      {
        id: 3,
        name: "Express",
        path: "/assets/tech_logo/express.png",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/tech_logo/tailwindcss.png",
      },
      {
        id: 5,
        name: "MongoDB",
        path: "/assets/tech_logo/mongodb.png",
      },
    ],
  },
  {
    id: 4,
    title: "My_Blog",
    description:
      "Developed a personal blogging platform using Django with a clean, modular architecture.",
    subDescription: [
      "Developed a personal blogging platform using Django with a clean, modular architecture.",
      "Implemented user authentication, post creation, editing, and deletion with Django's built-in admin and auth system.",
      "Added rich-text editing, tagging, and category filtering for enhanced content organization.",
      "Enabled commenting system with moderation controls and anti-spam measures.",
      "Designed a responsive, minimalist frontend using Tailwind CSS for an optimal reading experience.",
    ],
    githubLink: "https://github.com/SayedAnwar-07/My_Blog",
    href: "",
    logo: "",
    image: blog,
    tags: [
      {
        id: 1,
        name: "Django",
        path: "/assets/tech_logo/django.png",
      },
      {
        id: 2,
        name: "HTML",
        path: "/assets/tech_logo/html.png",
      },
      {
        id: 3,
        name: "CSS",
        path: "/assets/tech_logo/css.png",
      },
      {
        id: 4,
        name: "My SQL",
        path: "/assets/tech_logo/mysql.png",
      },
    ],
  },
  {
    id: 5,
    title: "Gearovo E-commerce Platform",
    description:
      "Gearovo is a fully functional e-commerce website developed using WordPress. It features a custom-designed theme built with Elementor, integrated with WooCommerce for product and order management. The site supports Stripe and PayPal for secure transactions, and includes responsive design, caching, and SEO optimization to deliver a smooth shopping experience across all devices.",
    subDescription: [
      "Designed and developed a custom WordPress theme tailored for Gearovo.",
      "Leveraged Elementor for flexible, drag-and-drop layout customization.",
      "Integrated WooCommerce for complete e-commerce functionality.",
      "Enhanced performance with caching tools and SEO optimization plugins.",
    ],
    href: "https://gearovo.com/",
    logo: "",
    image: gearovo,
    tags: [
      {
        id: 1,
        name: "ACF",
        path: "/assets/tech_logo/ACF.png",
      },
      {
        id: 2,
        name: "Yoast_SEO",
        path: "/assets/tech_logo/contact_form.png",
      },
      {
        id: 3,
        name: "Elementor",
        path: "/assets/tech_logo/Elementor.png",
      },
      {
        id: 4,
        name: "WordPress",
        path: "assets/tech_logo/wp.png",
      },
      {
        id: 5,
        name: "Yoast_SEO",
        path: "/assets/tech_logo/Yoast_SEO.png",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    id: 0,
    img: ostad,
    job: "Fullstack Engineer",
    title: "Ostad",
    date: "June 2024 - June 2025",
    course: "Full Stack Web Development with Python, Django & React",
    contents: [
      "Completed a comprehensive Full Stack Web Development course at Ostad.",
      "Specialized in HTML, CSS, SQL, Bootstrap, Python, Django, and React.",
      "Gained hands-on experience in building dynamic web applications, RESTful APIs, and database management.",
      "Developed a strong foundation in frontend and backend technologies.",
    ],
    skills: [
      "Python",
      "ReactJS",
      "JavaScript",
      "Bootstrap",
      "HTML",
      "CSS",
      "MySQL",
      "Django",
      "RESTful APIs",
    ],
  },
  {
    id: 1,
    img: ph,
    job: "Fullstack Developer",
    title: "Programming Hero",
    date: "December 2023 - June 2024",
    course: "MERN Stack Course",
    contents: [
      "Completed a comprehensive MERN Stack course at Programming Hero.",
      "Built web apps using MongoDB, Express.js, React.js, and Node.js.",
      "Strong foundation in RESTful APIs, database management, and responsive design.",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      "@tanstack/react-query",
    ],
  },
  {
    id: 2,
    img: sorobindu,
    job: "HTML, CSS & Bootstrap",
    title: "SoroBindu",
    date: "September 2023 - December 2023",
    course: "HTML, CSS & Bootstrap basic to advanced",
    contents: [
      "Completed a full course in HTML, CSS, and Bootstrap at SoroBindu.",
      "Focused on responsive web design and user-friendly UI techniques.",
      "Strong frontend foundation including layout, styling, and design best practices.",
    ],
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "Responsive Design",
      "Web Development",
      "Frontend Development",
      "Web Design",
    ],
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];

export const SkillsInfo = [
  { name: "WordPress", logo: wp },
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: javascriptLogo },
  { name: "React JS", logo: reactjsLogo },
  { name: "Redux", logo: reduxLogo },
  { name: "Tailwind CSS", logo: tailwindcssLogo },
  { name: "Material UI", logo: materialuiLogo },
  { name: "Bootstrap", logo: bootstrapLogo },
  { name: "Node JS", logo: nodejsLogo },
  { name: "Express JS", logo: expressjsLogo },
  { name: "MySQL", logo: mysqlLogo },
  { name: "MongoDB", logo: mongodbLogo },
  { name: "Firebase", logo: firebaseLogo },
  { name: "Django", logo: django },
  { name: "Git", logo: gitLogo },
  { name: "GitHub", logo: githubLogo },
  { name: "VS Code", logo: vscodeLogo },
  { name: "Postman", logo: postmanLogo },
  { name: "Compass", logo: mcLogo },
  { name: "Vercel", logo: vercelLogo },
  { name: "Netlify", logo: netlifyLogo },
  { name: "ChatGPT", logo: chatGPT },
  { name: "Python", logo: pythonLogo },
  { name: "JavaScript", logo: javascriptLogo },
];
