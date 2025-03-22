export interface IRecord {
  title: string;
  organization: string;
  timeline: string;
  description: string[];
}

export interface ISkill {
  name: string;
  icon: string;
  percentage: number;
}

export interface IProject {
  name: string;
  description: string;
  repo: string;
  url?: string;
  techs: string[];
}

export interface IData {
  experiences: IRecord[];
  educations: IRecord[];
  skills: ISkill[];
  projects: IProject[];
}

const data: IData = {
  experiences: [
    {
      title: "Software Engineer",
      organization: "Infosys",
      timeline: "2024-PRESET",
      description: [
        "Building scalable and maintainable enterprise applications using Java and Spring Framework.",
        "Managing NoSQL databases for flexible and high-performance data storage with MongoDB.",
        "Containerizing applications for seamless deployment and scalability using Docker.",
        "Handling real-time data streaming and event-driven architectures with Kafka.",
        "Automating CI/CD pipelines for efficient software delivery with Jenkins.",
      ],
    },
    {
      title: "Software Engineer",
      organization: "Revature",
      timeline: "2023-2024",
      description: [
        "Developed and maintained APIs using Java and Spring Framework.",
        "Built responsive and dynamic web applications with JavaScript, TypeScript, and React.",
        "Worked with PostgreSQL for database management and complex query handling.",
        "Containerized applications using Docker for efficient deployment and scalability.",
        "Implemented messaging and event-driven architectures with Apache Kafka.",
        "Leveraged AWS services for cloud deployment, storage, and scalability solutions.",
      ],
    },
    {
      title: "Director of Technical Operation",
      organization: "Metfone",
      timeline: "2019-2022",
      description: [
        "Led the technical operations and strategic initiatives as the Technical Director of a prominent telecom company.",
        "Oversaw the planning, design, implementation, and maintenance of complex telecom systems and networks.",
        "Managed a multidisciplinary team of engineers, technicians, and project managers, fostering collaboration and ensuring efficient project execution.",
        "Provided technical expertise and guidance to senior leadership, enabling informed decision-making, and driving business growth.",
        "Monitored key performance indicators (KPIs) and implemented continuous improvement initiatives to optimize network performance and enhance customer satisfaction.",
      ],
    },
    {
      title: "Technical Operator",
      organization: "Metfone",
      timeline: "2018-2019",
      description: [
        "Operated and maintained telecom equipment, ensuring uninterrupted service for customers.",
        "Monitored network performance, promptly identifying, and resolving technical issues to minimize downtime.",
        "Participated in on-call rotations to provide 24/7 support and address emergency situations.",
        "Trained new team members and conducted knowledge sharing sessions to enhance the overall team's expertise.",
      ],
    },
  ],
  educations: [
    {
      title: "Web Development Immersive",
      organization: "University of San Diego",
      timeline: "2023",
      description: [
        "Comprehensive understanding of electrical systems, electronics, and communication technologies to design and develop innovative solutions for the modern world.",
        "Built and deployed dynamic, responsive web applications following modern development practices.",
        "Gained hands-on experience in front-end and back-end development, API integration, and database management.",
        "Developed projects showcasing CRUD functionality, authentication, and state management.",
        "Worked in collaborative, Agile environments using Git and GitHub for version control.",
      ],
    },
    {
      title: "Master of Electronics Engineering",
      organization: "Military Technology Academy",
      timeline: "2018",
      description: [
        "Advanced knowledge on signal processing techniques for analyzing, filtering, and enhancing signals in applications such as telecommunications, audio processing, and data transmission systems.",
        "Design and application of semiconductor devices including diodes, transistors, and ICs, with expertise in device physics and fabrication techniques for optimal performance in electronic systems.",
        "Designing and developing embedded systems, integrating hardware and software for optimized performance in real-time applications and IoT solutions.",
      ],
    },
    {
      title: "Bachelor of Electrical and Electronics Engineering",
      organization: "Military Technology Academy",
      timeline: "2016",
      description: [
        "Analysis, and optimization of electrical systems, including power generation, distribution, and control systems, with a focus on efficiency, reliability, and performance.",
        "Design and development of electronic circuits, devices, and systems, with expertise in optimizing performance, reliability, and power efficiency for a wide range of applications.",
        "Comprehensive understanding of communication technologies, including wireless systems, network protocols, and data transmission, with a focus on improving connectivity, speed, and security in modern communication networks.",
      ],
    },
  ],
  skills: [
    {
      name: "java",
      icon: "devicon-java-plain",
      percentage: 85,
    },
    {
      name: "spring",
      icon: "devicon-spring-original",
      percentage: 80,
    },
    {
      name: "javascript",
      icon: "devicon-javascript-plain",
      percentage: 90,
    },
    {
      name: "typescript",
      percentage: 85,
      icon: "devicon-typescript-plain",
    },
    {
      name: "react.js",
      percentage: 90,
      icon: "devicon-react-original",
    },
    {
      name: "angular.js",
      percentage: 70,
      icon: "devicon-angularjs-plain",
    },
    {
      name: "node.js",
      icon: "devicon-nodejs-plain",
      percentage: 80,
    },
    {
      name: "express.js",
      icon: "devicon-express-original",
      percentage: 80,
    },
    {
      name: "swift",
      icon: "devicon-swift-plain",
      percentage: 75,
    },
    {
      name: "python",
      icon: "devicon-python-plain",
      percentage: 70,
    },
    {
      name: "html",
      icon: "devicon-html5-plain",
      percentage: 95,
    },
    {
      name: "css",
      icon: "devicon-css3-plain",
      percentage: 90,
    },
    {
      name: "sass",
      icon: "devicon-sass-original",
      percentage: 85,
    },
    {
      name: "tailwaind css",
      icon: "devicon-tailwindcss-original",
      percentage: 90,
    },
    {
      name: "sql",
      icon: "devicon-azuresqldatabase-plain",
      percentage: 70,
    },
    {
      name: "mongodb",
      icon: "devicon-mongodb-plain",
      percentage: 75,
    },
    {
      name: "shell",
      icon: "devicon-bash-plain",
      percentage: 70,
    },
    {
      name: "docker",
      icon: "devicon-docker-plain",
      percentage: 90,
    },
    {
      name: "git",
      icon: "devicon-git-plain",
      percentage: 85,
    },
    {
      name: "postman",
      icon: "devicon-postman-plain",
      percentage: 90,
    },
  ],
  projects: [
    {
      name: "Stranger's Things",
      description:
        "Dynamic marketplace where users can list items for sale, manage their posts, and connect with potential buyers.",
      repo: "",
      url: "",
      techs: ["TypeScript", "React", "Express", "MongoDB", "TailwindCSS"],
    },
    {
      name: "Art Collector",
      description: "Explore and view art collections using the Harvard Art Museums API.",
      repo: "",
      url: "",
      techs: ["TypeScript", "React", "SASS"],
    },
    {
      name: "Queenpins",
      description:
        "E-commerce web app that allows users to browse products, add items to their cart, and complete secure purchases.",
      repo: "",
      url: "",
      techs: ["TypeScript", "React", "Express", "Postgres", "TailwindCSS"],
    },
  ],
};

export default data;
