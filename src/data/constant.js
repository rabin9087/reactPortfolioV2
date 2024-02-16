import resume from '../images/assets/rabinShahResume.docx';
import weatherForecast from '../images/assets/weatherForecastIMG.png'
import movieDb from '../images/assets/movieDb.png'
import prankCalculator from '../images/assets/prankCalulator.png'
import notTodoList from '../images/assets/notToDOList.png'
import unitConverter from '../images/assets/unitConverter.png'
import portfolioV1 from '../images/assets/portfolioV1.png'
import android1 from '../images/assets/android1.png'
import financeMangement from '../images/assets/transactionManagement.png'
import libraryManagemant from '../images/assets/libraryManagement.png'

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
  description: "Dedicated and highly motivated individual with experience in developing and implementing software solutions. Proven experience in creating, testing, and debugging high-performance software systems, with a sharp eye for details. Possesses excellent problem-solving and communication abilities, as well as a strong desire to learn about and adopt new technologies.",
  github: "https://github.com/rabin9087",
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
        name: "Bootstrap",
        image:
          "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
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
    img: "https://selfplus.plus/wp-content/uploads/2021/11/selfplusplus-logo-full-color-rgb.svg",
    role: "Full Stack Developer",
    company: "Self Plus Plus",
    date: "August 2023 - Current",
    desc: [
      "Actively involved in developing server-side web applications using Node.js and Express, ensuring seamless integration with front-end technologies",
      "Utilized Prisma as the ORM tool to streamline database integrations and implemented CRUD operations in MySQL, optimizing data retrieval and updating processes",
      "Utilized Postman to rigorously test APIs endpoints, ensuring functionality, performance, and security",
      "Managed version control using Git, facilitating collaborative development and codebase maintenance",
      "Created a RESTful API that allowed for seamless integration with other applications",
      "Developed a secure authentication system that ensured user privacy and data security",
      "Collaborated with cross-functional teams, including front-end developers and product managers, to ensure cohesive and efficient application development",
      "Implemented a Responsive Design that allowed the application to be used on various devices with the same user experience",
      "Optimized database queries to improve application performance and reduce response times by 15%",
      "Debugged the application using Chrome inspector"],
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "Redux",
      "NodeJs",
      "ExpressJs",
      "MySQL",
      "MongoDB"
    ],
    doc: "",
  },
  {
    id: 0,
    img: "data:image/png;base64,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",
    role: "FRONT END DEVELOPER ",
    company: "Extratech",
    date: "March 2023 - July 2023",
    desc: [
      "Developed and maintained react app using HTML5, CSS3, JavaScript, Bootstraps, React.js, and Tailwind",
      "Created and developed database structures and enhance SQL queries to improve the efficiency of data retrieval",
      "Used version control systems like Git to manage and track changes in the codebase",
      "Created and deployed RESTful APIs to seamlessly integrate external services",
      "Collaborated with back-end developers to integrate front-end components with server-side logic and APIs",
      "Staying up-to-date with the latest trends, technologies, and best practices",
      "Debugged and fixed the bugs to ensure optimal performance and functionality of web applications"],
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
];

export const education = [
  {
    id: 0,
    img: "https://media.licdn.com/dms/image/C560BAQE4UC9Z_k3c7A/company-logo_200_200/0/1579422507409?e=1692230400&v=beta&t=HJssPsrwwkAJAsvFiVIYPdM8GzUuuSK5YlATKgLx3Bc",
    school: "Victoria University, Sydney, NSW",
    date: "July 2020 - Sep 2022",
    grade: "8.71 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at Kalinga Institute of Industrial Technology, Bhubaneswar. I have completed 4 semesters and have a CGPA of 8.71. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. I am also a member of the Google Developers Student Club (GDSC) at KIIT, where I am learning and working on exciting projects with a team of talented developers.",
    degree: "Bachelor of Information Technology",
  },
  {
    id: 1,
    img: "https://methodistschool-dankuni.webs.com/NEW%20BADGE.jpg",
    school: "Kingston Institute Australia, Sydney, NSW",
    date: "November 2018 - June 2020",
    grade: "Competent",
    desc: "I completed my class 12 high school education at Methodist School, Dankuni, where I studied Science with Computer Science.",
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
    title: "Unit Converter",
    date: "Aug 2023",
    description: "This is unit converter web app. You can convert unit of Length, Area, Volume, Weight, Temperature and Time into another unit",
    image:
      unitConverter,
    tags: ["HTML", "CSS", "Javascript", "Bootstrap", "React Js"],
    category: "web app",
    github: "https://github.com/rabin9087/unitconverter",
    webapp: "https://vercel.com/rabins-projects/unitconverter",
  },
  {
    id: 6,
    title: "Weather Forecast",
    date: "Oct 2023",
    description:
      "This is weather forecast web apps. You can search weather of any city jusy by searching city name",
    image:
      weatherForecast,
    tags: [
      "HTML", "CSS", "Javascript", "Bootstrap",
      "React Js",

    ],
    category: "web app",
    github: "https://github.com/rabin9087/weatherForecast",
    webapp: "https://weather-forecast-pearl.vercel.app/",
  },
  {
    id: 7,
    title: "Portfolio Version 1",
    date: "Oct 2023",
    description:
      "This is my Portfolio version one. This was my first portfolio.",
    image:
      portfolioV1,
    tags: ["HTML", "CSS", "ReactJS", "JavaScript"],
    category: "web app",
    github: "https://github.com/rabin9087/reactPortfolio",
    webapp: "https://react-portfolio-virid-beta.vercel.app/",
  },
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
  {
    id: 9,
    title: "Student Details",
    date: "Oct 2021",
    description:
      "This is an android application, build in android studio. In this application user can enter their score in different subjects and the application will show average score and other details",
    image: "",
    tags: ["Java", "Android Studio",],
    category: "android app",
    github: "https://github.com/rabin9087/StudentID",
    webapp: "https://github.com/rabin9087/StudentID",
  },

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