import ResumeCard from "../../shared/resumeCard/ResumeCard";
import { Link } from "react-router-dom";
import Button from "../../shared/button/Button";
import "./Resume.css";
import pdf from "../../static/Edward's resume.pdf";

const Resume = () => {
  const experiences = [
    {
      company: "maliroso Digital",
      position: "Frontend Engineer(Full Time)",
      started: "Sept 2024",
      ended: null,
      description: null,
      achievements: [
        "Develop and maintain responsive, user-friendly web interfaces using React and cross-platform mobile applications using React Native, ensuring consistency, performance, and a seamless user experience across all platforms.",
        "Collaborate with UI/UX designers to translate design mockups into functional components for both web and mobile, adhering to platform-specific best practices.",
        "Architect and implement state management solutions and integrate RESTful/GraphQL APIs to handle data efficiently on web and mobile clients.",
        "Implement performance best practices (e.g., lazy loading, code splitting, memoization) to enhance application speed and scalability on all devices",
      ],
    },
    {
      company: "Vosyn AI",
      position: "Frontend Developer(Part Time)",
      started: "Aug 2024",
      ended: "Feb 2024",
      description: null,
      achievements: [
        "Developed high-quality, reusable frontend components for an AI-powered platform using React and Next.js.",
        "Engineered advanced 3D visualizations and interactive features using Three.js, enhancing data representation and user engagement.",
        "Contributed to a comprehensive test suite to ensure component reliability and application stability",
      ],
    },
    {
      company: "Freexit Technologies",
      position: "Frontend Engineer(Part Time)",
      started: "Feb 2023",
      ended: null,
      description: null,
      achievements: [
        "Spearheaded the frontend architecture for a cutting-edge logistics software platform using Next.js, focusing on scalability and security.",
        "Extended platform accessibility by developing and maintaining a companion cross-platform mobile application using React Native, ensuring feature parity and a consistent user experience.",
        "Implemented robust security measures to protect customer data and financial transactions, building user trust.",
        "Enhanced platform performance and reliability to support a rapidly growing user base.",
      ],
    },
    {
      company: "Prexcribe",
      position: "Lead Frontend Engineer(Part Time)",
      started: "Jul 2022",
      ended: "Jul 2024",
      description: null,
      achievements: [
        "Led frontend development for a healthcare SaaS platform, increasing operational efficiency by 35% through strategic technology integration and process improvements.",
        "Architected and optimized responsive UIs for critical patient data access, enabling seamless usability across devices.",
        "Implemented stringent security protocols and compliant data handling practices to meet healthcare regulations (HIPAA/GDPR-like standards).",
        "Collaborated on a user-centric design strategy that improved overall user satisfaction by 20%.",
      ],
    },
    {
      company: "BlueTag Technologies Limited",
      position: "Software Developer(Full Time)",
      started: "Jan 2020",
      ended: "Nov 2022",
      description: null,
      achievements: [
        "Updated old code bases to modern development standards, improving functionality by 20%.",
        "Collaborated with project managers to select ambitious, but realistic coding milestones on pre-release software project development.",
        "Integrated constructive programs into cohesive product.",
        "Designed intuitive graphical user interfaces to improve user experience.",
        "Integrated software components into fully functional software system.",
      ],
    },
    // {
    //   company: "Kellispay",
    //   position: "Frontend Developer (Contract)",
    //   started: "Jan 2022",
    //   ended: "Jun 2022",
    //   description: null,
    //   achievements: [
    //     "Planned and developed interfaces that simplified overall management and ease usage.",
    //     "Optimized website and increased speed by 15%.",
    //     "Built and deployed scalable mobile responsive User Interfaces for maximized User experience.",
    //     "Contributed ideas and suggestions in team meetings and delivered updates on deadlines, designs and enhancements",
    //   ],
    // },
    // {
    //   company: "Davayte",
    //   position: "Frontend Engineer (Contract)",
    //   started: "Jan 2019",
    //   ended: "Dec 2019",
    //   description: null,
    //   achievements: [
    //     "Worked cooperatively with client services, sales and design team in deadline-driven environment.",
    //     "Designed and updated layouts to meet usability and performance requirements, increasing app speed by 10%.",
    //     "Coded using HTML, CSS and JavaScript to develop features for both mobile and desktop platforms.",
    //     "Improved tools to boost user interaction and deliver design versatility.",
    //   ],
    // },
    // {
    //   company: "Nigerian Breweries PLC",
    //   position: "Software Developer (IT)",
    //   started: "Apr 2018",
    //   ended: "Sept 2018",
    //   description: null,
    //   achievements: [
    //     "Built and deployed scalable mobile responsive User Interfaces for maximized User experience.",
    //     "Assisted with search engine optimization (SEO) strategies and techniques.",
    //     "Worked with version control systems such as Git and SVN.",
    //     "Wrote well designed, testable and efficient code.",
    //     "Participated in code reviews to ensure best practices.",
    //   ],
    // },
  ];

  return (
    <div className="resume">
      <div className="resume_container">
        <div className="top_row">
          <h1>Edward Ugwu</h1>
          <div className="buttons">
            <a href="https://www.linkedin.com/in/nnvemeka/">
              <small>
                <i className="fab fa-linkedin"></i> <span>LinkedIn</span>
              </small>
            </a>
            <a href={pdf} download>
              <small>
                <i className="fas fa-download"></i> <span>Download </span>
              </small>
            </a>
          </div>
        </div>
        <p>Frontend Engineer</p>
        <div className="summary">
          <p>
            An A results-driven Frontend Engineer with 5+ years of experience
            specializing in building high-performance, scalable web applications
            using modern JavaScript frameworks. Proven ability to lead
            development teams, translate complex business requirements into
            technical solutions, and deliver exceptional user experiences that
            drive engagement and operational efficiency. Passionate about clean
            code, performance optimization, and mentoring.
          </p>
        </div>
        <div className="divider">
          <p>Tools & Technologies</p>
          <span></span>
        </div>
        <div className="skills">
          <p>
            React, React Native, NextJS, JavaScript, Typescript, CSS, Sass/SCSS,
            Styled components, Tailwind CSS, Bootstrap, Material UI, Chakra UI,
            Fetch API, Axios, GraphQL, React query(Tanstack), Framer motion,
            GSAP(Greensock), Git.
          </p>
        </div>
        <div className="divider">
          <p>Experiences</p>
          <span></span>
        </div>
        <div>
          {experiences.map((experience, index) => (
            <ResumeCard {...experience} key={index} id={index} />
          ))}
        </div>
        <div className="divider">
          <p>Projects</p>
          <span></span>
        </div>
        <div className="exp_container">
          <section className="experience">
            <article className="description">
              <p className="nospan">
                Links to my works can be found on{" "}
                <Link to="/project"> Projects</Link>
              </p>
            </article>
          </section>
        </div>
      </div>
      <Button
        previous={{ url: "/article", text: "Article" }}
        next={{ url: "/", text: "Home" }}
      />
    </div>
  );
};

export default Resume;
