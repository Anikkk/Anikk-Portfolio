import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `Computer Science graduate student with 4+ years of experience specializing in backend development and data
engineering. Strong Object-oriented programming skills and experienced in cloud technologies, known for
building and delivering high-quality, scalable and modular RESTful microservices to enhance user experiences.
Committed to staying current with industry trends and continuously improving skills.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "January 2024 - August 2024",
    role: "Full Stack Developer",
    company: "Applied Bell Curve",
    description: `• Led the development of Applied Bell Curve’s Flagship Dashboard using React.js, reducing load time by 30% and providing personalized User experiences.
                  • Implemented responsive and accessible design, ensuring compatibility across multiple devices and browsers, boosting user engagement by 25%.
                  • Utilized Flask for backend development across all aspects of the application, including Updating User details in DynamoDB, Fetching User details, and Handling user authentication during registration and login.
                  • Developed a comprehensive forecasting model to predict cotton prices utilizing multiple machine learning algorithms including XGBoost, Adaptive Boost, ARIMA, SARIMAX, and LSTM. Conducted comparative analysis and determined that the LSTM model achieved superior accuracy, closely mirroring actual price trends and outperforming other models in predictive performance.`,
    technologies: [ "ReactJs","HTML", "CSS","Material UI", "Python","DynamoDB","AWS Amplify", "MySQL"],
  },
  {
    year: "August 2020 - December 2023",
    role: "Senior Data Engineer",
    company: "Wipro Technology",
    description: `• Designed, developed, and maintained ETL mappings and workflows applying the business rules, creating Technical Design and Unit Test Case Documents.
                  • Designed, developed, and maintained Azure data pipelines using services such as Azure data factory, Azure blob storage, Data lake storage and Azure Data Pipeline to automate data ingestion, transformation, and loading tasks.
                  • Contributed to the orchestration of a scalable micro-services architecture, resulting in a 30% performance boost with Docker and PySpark.
                  • Utilized Spark SQL API in PySpark to extract and load data, and performed SQL queries, enabling efficient data processing and analysis.
                  • Designed and Developed ETL jobs to extract data from different sources and load it in data mart in Azure Data Lake Storage and managed clusters such as launching the cluster by specifying the nodes and performing the data analysis.`,
    technologies: ["SAP BODS","Data Lake","Azure Blob Storage","Azure Data Factory", "SSMS", "Azure and its services"],
  },
  {
    year: "Jan 2020 - July 2020",
    role: "Software Engineer Intern",
    company: "IIT Kanpur",
    description: `• Developed dynamic, single-page applications (SPA) using ReactJS, JavaScript (ES6), and Redux.
                  • Utilized React Router to create seamless, navigation-rich experience for users, increasing user engagement by 20%. 
                  • Optimized website performance by implementing code-splitting, reducing initial load times by 40%. 
                  • Collaborated with backend developers to integrate REST APIs and implement JWT-based authentication for user management.
                  • Participated in daily Scrum meetings, sprint planning, and retrospectives to ensure on-time delivery of features.`,
    technologies: ["ReactJs"],
  },
];

export const PROJECTS = [
  {
    title: "Buy Now Pay Later",
    image: project1,
    description:
      "A Retail Company has introduced “Buy now pay later” (BNPL) feature within the mobile app platform. We need to predict if a customer will ignore or enroll in the BNPL feature. The problem of predicting whether a customer will ignore or enroll in the Buy Now, Pay Later (BNPL) feature is significant for several reasons, both for a business and consumer perspective.",
    technologies: ["Data Science","Exploratory Data Analysis(EDA)"],
    location:"Univeristy at Buffalo, 2024"
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "26 Callodine Ave, Buffalo, NY",
  phoneNo: "+1 716 436 8247",
  email: "aniketjmsr98@gmail.com",
};
