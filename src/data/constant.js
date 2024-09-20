import resume from '../images/assets/rabinShahResume.pdf';
import movieDb from '../images/assets/movieDb.png'
import prankCalculator from '../images/assets/prankCalulator.png'
import notTodoList from '../images/assets/notToDOList.png'
import android1 from '../images/assets/android1.png'
import financeMangement from '../images/assets/transactionManagement.png'
import libraryManagemant from '../images/assets/libraryManagement.png'
import cricketGearAdmin from '../images/assets/cricketGearAdmin.png'
import cricketGearClient from '../images/assets/cricketGearClient.png'
import todo from '../images/assets/todo.png'

export const Bio = {
  name: "Rabin Shah",
  roles: [
    "Full Stack Developer",
    "Front-end Developer",
    'Software Developer',
    "MERN DEVELOPER",
    "Android Developer",
    "Programmer",
  ],
  description: "Highly dedicated and motivated front-end developer with 3+ years of experience in building scalable, high-performing, and innovative applications using modern technologies like JavaScript, React, TypeScript, and AngularJS. Proficient in converting designs into robust, accessible, user-friendly web application interfaces, and skilled in API integration using RESTful services. Adept at collaborating within Agile teams, optimizing CI/CD pipelines, and implementing unit testing strategies. Strong emphasis on security, performance, and creating seamless user experiences across devices. Excellent communicator with a commitment to continuous learning and career growth.",  github: "https://github.com/rabin9087",
  resume:
    resume,
  linkedin: "https://www.linkedin.com/in/rabin-shah",
  insta: "https://www.instagram.com/rabinshah9087",
  facebook: "https://www.facebook.com/rabin908765",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Redux",
        image:
          "https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg",
      },

      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "TypeScript",
        image:
          "https://static-00.iconduck.com/assets.00/file-type-typescript-icon-512x338-z2qpgdwd.png",
      },
      {
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Tailwind",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX9fZzRj7BuQAtuf6RSuqIjWEaai2Vl7sFq2Y6tKq5hA&s",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image:
          "data:image/png;base64,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",
      },
      {
        name: "Prisma",
        image:
          "https://static-00.iconduck.com/assets.00/prisma-icon-423x512-isxs6996.png",
      },
    ],
  },
  {
    title: "Database",
    skills: [
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
    ],
  },
  {
    title: "Tools",
    skills: [

      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Android Studio",
        image:
          "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
      },
      {
        name: "Postman",
        image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      },
      {
        name: "Intellij",
        image: "https://blog.jetbrains.com/wp-content/uploads/2019/01/idea_icon.svg",
      }
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://media.licdn.com/dms/image/C560BAQGNeKic6vWDRg/company-logo_200_200/0/1630617312483/rebb_tech_pty_ltd_logo?e=2147483647&v=beta&t=QwA2s1qIELwrKFx6xuMJb-hwJ4xavOYnfiw_MXofmqs",
    role: "Full Stack Developer - Full-time",
    company: "Rebb Tech ",
    date: "December 2021 - Present",
    desc: [
    "Developed web application using JavaScript Framework such as React.js for the frontend and Express.js for the backend",
    "Utilized Prisma as the ORM tool to streamline database integrations and implemented CRUD operations in MySQL, optimizing data retrieval and updating processes, resulting in a 40% increase in data processing speed",
    "Utilized Postman to rigorously test APIs endpoints, ensuring functionality, performance, and security",
    "Managed version control using Git, facilitating collaborative development and codebase maintenance",
    "Created a RESTful API that allowed for seamless integration with other applications",
    "Developed a secure authentication and authorization systems that reduced malicious attack by 40%",
    "Collaborated with cross-functional teams, including front-end developers, designers, product managers, and other engineers to ensure cohesive and efficient application development",
    "Implemented responsive design principles that allowed the application to be used on various devices with the same user experience",
    "Introduced automated testing and CI/CD pipelines, cutting code review time by 30%",
    "Optimized database queries to improve application performance and reduce response times by 15%",
    "Implemented cross-browser compatibility application to be used in different web browsers",
    ],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "Redux",
      "React-Query",
      "NodeJs",
      "ExpressJs",
      "MySQL",
      "MongoDB"
    ],
    doc: "",
  },
  {
    id: 1,
    img: "https://media.licdn.com/dms/image/v2/D560BAQH3WjcoYHfhmg/company-logo_200_200/company-logo_200_200/0/1711058460689/dented_code_academy_logo?e=1735171200&v=beta&t=bcoD4y-ZeEKExd1oVJJhR3F-0HCH7a_9TfFPLea0qpE",
    role: "Junior Frontend Developer - Part-time",
    company: "Dented Code",
    date: "July 2021 - Sept 2022",
    desc: [
    "Developed and maintained react application using HTML5, CSS3, TypeScript, React.js, Vite, Redux, and Tailwind",
    "Used Git as a version control system to manage and track changes in the codebase",
    "Designed, developed, and optimized RESTful API for the frontend using React and Axios to facilitate effective communication with backend services, reducing API response time by 50%",
    "Collaborated with back-end developers to integrate front-end components with server-side logic and APIs.",
    "Integrated AuthO and JWT for secure authentication and implemented rigorous input validation to enhance API security, reducing potential security threats",
    "Optimised applications for maximum speed and scalability",
    "Regularly conducted code reviews and provide feedback to maintain high code quality across the team",
    "Stayed up to date with the latest trends, technologies, and best practices",
    "Debugged, troubleshooted, and fixed the bugs to ensure optimal performance and functionality",
    ],
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "ReactJS",
      "Tailwind",
      "Bootstrap",
    ],
    doc: "",
  },
   {
    id: 2,
    img: "https://media.licdn.com/dms/image/v2/D560BAQGitkNWtrxZug/company-logo_200_200/company-logo_200_200/0/1719359018587/woolworths_group_logo?e=1735171200&v=beta&t=Pye28CNHQ11oLFjrR0bXw5b-EF9O_iQij6hVlo9A5J4",   role: "Shift Supervisor – Part-time  ",
    company: "Woolworths Group",
    date: "Dec 2020 - June 2021",
    desc: [
 
  "Supervised a team, providing guidance and ensuring smooth day-to-day operations",
  "Handled customer inquiries and complaints with strong problem-solving skills",
  "Managed inventory levels and placed orders to ensure stock availability",
  "Maintained service standards by enforcing policies and procedures"

    ],
     skills: [
      "time Management",
      "Team Player",
      "Problem-Solving",
      "Communication and Collaboration",
      "Attention to detail",
    ],
    doc: "",
  },
    {
    id: 3,
    img: "https://media.licdn.com/dms/image/v2/C4E0BAQHWxquJ9PJxvw/company-logo_200_200/company-logo_200_200/0/1630594652024/mcdonalds_corporation_logo?e=1735171200&v=beta&t=iKBvVfifDAXr-UJtqZsUGDDfUznvW4ZDnM_GyCs_i2I",   role: "Crew Trainer – Part-time ",
    company: "McDonald’s",
    date: "July 2017 - Nov 2020",
    desc: [
    "Trained new employees in operational procedures, safety, and customer service",
    "Ensured compliance with food safety standards and regulations",
    "Collaborated with management to implement operational improvements"

    ],
    skills: [
      "Customer Service",
      "Team Player",
      "Problem-Solving",
      "Communication and Collaboration",
      "Handle with Care",
    ],
    doc: "",
  },
];

export const education = [
  {
    id: 0,
    img: "https://media.licdn.com/dms/image/C560BAQE4UC9Z_k3c7A/company-logo_200_200/0/1579422507409?e=1692230400&v=beta&t=HJssPsrwwkAJAsvFiVIYPdM8GzUuuSK5YlATKgLx3Bc",
    school: "Victoria University, Sydney, NSW",
    date: "July 2020 - Sep 2022",
    grade: "8.71 CGPA",
    desc: "",
    degree: "Bachelor of Information Technology",
  },
  {
    id: 1,
    img: "https://methodistschool-dankuni.webs.com/NEW%20BADGE.jpg",
    school: "Kingston Institute Australia, Sydney, NSW",
    date: "November 2018 - June 2020",
    grade: "Competent",
    desc: "",
    degree: "Advanced Diploma of Information Technology",
  },
  {
    id: 2,
    img: "https://methodistschool-dankuni.webs.com/NEW%20BADGE.jpg",
    school: "Kingston Institute Australia, Sydney, NSW",
    date: "May 2017 - November 2019",
    grade: "92.3%",
    desc: "I completed my class 10 education at Methodist School, Dankuni, where I studied Science with Computer Application.",
    degree: "Diploma of Information Technology",
  },
];

export const projects = [
  {
    id: 0,
    title: "E-Commerce Website",
    date: "Dec 2023 - Present",
    description: "This is e-commerce website project, responsive across all devices and was built using React, Node.js, Tailwind CSS, HTML, CSS, JavaScript, MongoDB for the database, Redux for global state management, Stripe for payment processing, and JWT for authentication and authorization. It also utilizes various other npm packages.\n" +
      "Key Features: \n " +
      "Users can order cricket gear products.\n " +
      "Ability to search products by name.\n " +
      "Landing page suggests similar items for enhanced user experience.",
    image:
      cricketGearClient,
    tags: [
      "HTML", "CSS", "Javascript", "Bootstrap", "React-Bootstrap", "Redux", "Tailwind",
      "React Js", "MongoDB",

    ],
    category: "web app",
    github: "https://github.com/rabin9087/client-cms-frontend",
    github2: "https://github.com/rabin9087/client_cms_backend",
    webapp: "https://cricket-gear.vercel.app/",
  },
  {
    id: 0,
    title: "E-Commerce Admin Site",
    date: "Dec 2023 - Present",
    description: "This is e-commerce website build using react, nodejs, mongodDB, express, redux, tailwindcss.",
    image:
      cricketGearAdmin,
    tags: [
      "HTML", "CSS", "Javascript", "Bootstrap", "React-Bootstrap", "redux",
      "React Js", "MongoDB",

    ],
    category: "web app",
    github: "https://github.com/rabin9087/admin-cms-frontend",
    github2: "https://github.com/rabin9087/admin-cms-backend",
    webapp: "https://admin-cms-frontend.vercel.app/",
  },
  {
    id: 0,
    title: "Library Managemant System",
    date: "Nov 2023 - Dec 2023",
    description:
      "In this application, you can post new books when you signup as an admin, users can burrow books and can give review of book after return.",
    image:
      libraryManagemant,
    tags: [
      "HTML", "CSS", "Javascript", "Bootstrap", "React-Bootstrap",
      "React Js", "MongoDB",

    ],
    category: "web app",
    github: "https://github.com/rabin9087/library-management-ui",
    github2: "https://github.com/rabin9087/library-backend",
    webapp: "https://library-management-ui.vercel.app/",
  },
  {
    id: 1,
    title: "Finance Management System",
    date: "Oct 2023 - Nov 2023",
    description:
      "In this application, you can manage your every transaction. You can add transaction according to income and expenses.",
    image:
      financeMangement,
    tags: [
      "HTML", "CSS", "Javascript", "Bootstrap", "React-Bootstrap",
      "React Js", "MongoDB",

    ],
    category: "web app",
    github: "https://github.com/rabin9087/frontendFinanceManagement",
    github2: "https://github.com/rabin9087/financeManagementBackend",
    webapp: "https://frontend-finance-management.vercel.app/",
  },
  {
    id: 2,
    title: "Not todo List",
    date: "Oct 2023",
    description: "This is not todo list web app. You can add a task you have done including the hours taken to do it. Later on you can add categories that task either as a todo task or not todo task.",
    image:
      notTodoList,
    tags: ["React Js", "Bootstrap",
      "MongoDb",
      "Node Js",
      "Express Js",],
    category: "web app",
    github: "https://github.com/rabin9087/ntdl_full_stack",
    webapp: "https://tasklist-o98r.onrender.com/",

  },
  {
    id: 3,
    title: "Movie Collection",
    date: "Sept 2023",
    description: "This is movie collection Database. You can find any movie here and you can listed them as a happy or action movie for you.",
    image:
      movieDb,
    tags: ["HTML", "CSS", "Javascript", "Bootstrap", "React Js",],
    category: "web app",
    github: "https://github.com/rabin9087/Movie_Finder_API",
    webapp: "https://movie-finder-api.vercel.app/",

  },

  {
    id: 4,
    title: "Prank Calculator",
    date: "Sept 2023",
    description: "This is a prank calulator. It work as a Calulator",
    image:
      prankCalculator,

    tags: [
      "HTML", "CSS", "Javascript", "Bootstrap", "React Js"
    ],
    category: "web app",
    github: "https://github.com/rabin9087/prankCalculator",
    webapp: "https://prank-calculator-95obhprwd-rabins-projects.vercel.app/",
  },

  {
    id: 5,
    title: "Todo Application",
    date: "Aug 2023",
    description: "This is todo application build using react, nodejs, and mongoDb. In this application user can post new task, update status of task, delete the task and update the task name its status with in the application. In this application there is a search features too, user can search specific task by search name of the task.",
    image:
      todo,
    tags: ["HTML", "CSS", "Javascript", "React Js", "TailwindCSS", "NodeJS", "MongoDB"],
    category: "web app",
    github: "https://github.com/rabin9087/todo_app_client",
    github2: "https://github.com/rabin9087/todo_app_server",
    webapp: "https://todo-list-app-tau-one.vercel.app/",
  },
  // {
  //   id: 6,
  //   title: "Weather Forecast",
  //   date: "Oct 2023",
  //   description:
  //     "This is weather forecast web apps. You can search weather of any city jusy by searching city name",
  //   image:
  //     weatherForecast,
  //   tags: [
  //     "HTML", "CSS", "Javascript", "Bootstrap",
  //     "React Js",

  //   ],
  //   category: "web app",
  //   github: "https://github.com/rabin9087/weatherForecast",
  //   webapp: "https://weather-forecast-pearl.vercel.app/",
  // },
  // {
  //   id: 7,
  //   title: "Portfolio Version 1",
  //   date: "Oct 2023",
  //   description:
  //     "This is my Portfolio version one. This was my first portfolio.",
  //   image:
  //     portfolioV1,
  //   tags: ["HTML", "CSS", "ReactJS", "JavaScript"],
  //   category: "web app",
  //   github: "https://github.com/rabin9087/reactPortfolio",
  //   webapp: "https://react-portfolio-virid-beta.vercel.app/",
  // },
  {
    id: 8,
    title: "NepService",
    date: "Feb 2022 to July 2022",
    description:
      "This is an android application, build in android studio. In this application user can create their account and login using their credientials. After verification, users can post, view, and update posts for their advertised in the app. They can reset their pasword which can be done using firebase authentication.",
    image: android1,
    tags: ["Java", "Android Studio", "Firebase", "MSSQl managemant studio"],
    category: "android app",
    github: "https://github.com/rabin9087/NepService",
    webapp: "https://www.linkedin.com/posts/rabin-shah-175a20117_android-activity-7047740802977976320-jj4I?utm_source=share&utm_medium=member_desktop",
  },
  // {
  //   id: 9,
  //   title: "Student Details",
  //   date: "Oct 2021",
  //   description:
  //     "This is an android application, build in android studio. In this application user can enter their score in different subjects and the application will show average score and other details",
  //   image: "",
  //   tags: ["Java", "Android Studio",],
  //   category: "android app",
  //   github: "https://github.com/rabin9087/StudentID",
  //   webapp: "https://github.com/rabin9087/StudentID",
  // },

];

export const TimeLineData = [
  { year: 2020, text: "Started my journey" },
  { year: 2021, text: "Worked as a freelance developer" },
  { year: 2022, text: "Start Developing own projects" },
  { year: 2023, text: "Graduate from University and Seeking for job" },
];

export const Interest = [
  "Coding", "Cricket", "Reading"
]