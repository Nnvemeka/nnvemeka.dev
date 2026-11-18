import { Link } from "react-router-dom";
import ResumeCard from "../../shared/resumeCard/ResumeCard";
import Button from "../../shared/button/Button";
import "./Resume.css";
import resumePdf from "../../static/Edward-Nnaemeka-Ugwu-Resume.pdf";

const Resume = () => {
  const experiences = [
    {
      company: "Maliroso Digital (Full-time), Enugu, Nigeria",
      position: "Frontend Developer",
      started: "Sep 2024",
      ended: "Present",
      achievements: [
        "Build and maintain responsive React web interfaces and cross-platform React Native mobile applications with consistent performance and user experience.",
        "Partner with UI/UX designers to turn design mockups into reusable web and mobile components that follow platform best practices.",
        "Architect state management solutions and integrate RESTful and GraphQL APIs for efficient data handling on web and mobile clients.",
        "Improve application speed and scalability through lazy loading, code splitting, and memoization.",
      ],
    },
    {
      company: "Vosyn, Canada (Remote)",
      position: "Frontend Developer Intern",
      started: "Aug 2024",
      ended: "Feb 2025",
      achievements: [
        "Developed reusable frontend components for an AI-powered platform using React and Next.js.",
        "Built 3D visualizations and interactive features with Three.js to improve data representation and user engagement.",
        "Contributed to the test suite, improving component reliability and application stability.",
      ],
    },
    {
      company: "Freexit Technologies (Part-time), Lagos, Nigeria",
      position: "Frontend Engineer",
      started: "Feb 2023",
      ended: "2025",
      achievements: [
        "Led frontend architecture for a logistics software platform built with Next.js, prioritizing scalability and security.",
        "Built and maintained a companion React Native mobile app with feature parity and a consistent experience across web and mobile.",
        "Implemented security measures that protected customer data and financial transactions.",
        "Improved platform performance and reliability to support a rapidly growing user base.",
      ],
    },
    {
      company: "Prexcribe (Part-time), Abuja, Nigeria",
      position: "Lead Frontend Engineer",
      started: "Jul 2022",
      ended: "Jul 2024",
      achievements: [
        "Led frontend development for a healthcare SaaS platform, increasing operational efficiency by 35% through technology integration and process improvements.",
        "Architected responsive, performance-optimized interfaces for secure patient data access across devices.",
        "Implemented security protocols and compliant data-handling practices aligned with HIPAA/GDPR-style healthcare regulations.",
        "Collaborated on a user-centered design strategy that raised user satisfaction by 20%.",
      ],
    },
    {
      company: "Bluetag Technologies (Full-time), Enugu, Nigeria",
      position: "Software Developer",
      started: "Jul 2020",
      ended: "Nov 2022",
      achievements: [
        "Modernized legacy codebases to current development standards, improving functionality and performance by 20%.",
        "Designed intuitive graphical user interfaces that improved the overall user experience.",
        "Worked in an Agile team to integrate software components and deliver project milestones on schedule.",
      ],
    },
  ];

  const projectHighlights = [
    {
      name: "Jenny's Glow",
      url: "https://jennysglowng.com",
      description:
        "Built an e-commerce website for a beauty brand to strengthen online presence and drive customer engagement through a seamless user experience.",
      tech: "React, Next.js, Chakra UI",
    },
    {
      name: "Vosyn AI Platform",
      url: "https://vosyn.ai",
      description:
        "Contributed to an AI-powered platform that streamlines workflows and boosts productivity through intelligent automation and data-driven insights.",
      tech: "React, Next.js, Tailwind CSS",
    },
    {
      name: "SchoolMotive",
      url: "https://schoolmotive.com",
      description:
        "Developed a school management system that supports personalized learning, streamlines administrative tasks, and improves communication between educators, students, and parents.",
      tech: "React, TypeScript, TanStack Query, Chakra UI",
    },
    {
      name: "TranxNow",
      url: "https://tranxnow.com",
      description:
        "Built the web frontend for a financial infrastructure platform focused on fast, secure global money movement. Designed responsive, performance-optimized payment workflows with security and reliability as priorities.",
      tech: "React, TypeScript",
    },
  ];

  return (
    <div className="resume">
      <div className="resume_container">
        <div className="top_row">
          <h1>Edward Ugwu</h1>
          <div className="buttons">
            <a
              href="https://www.linkedin.com/in/nnvemeka/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <small>
                <i className="fab fa-linkedin" aria-hidden="true"></i>{" "}
                <span>LinkedIn</span>
              </small>
            </a>
            <a href={resumePdf} download="Edward-Nnaemeka-Ugwu-Resume.pdf">
              <small>
                <i className="fas fa-download" aria-hidden="true"></i>{" "}
                <span>Download CV</span>
              </small>
            </a>
          </div>
        </div>
        <p>Frontend Engineer | React | React Native | Next.js | TypeScript</p>
        <p>
          Enugu, Nigeria |{" "}
          <a href="tel:+2348164578471" style={{ color: "inherit" }}>
            +2348164578471
          </a>{" "}
          |{" "}
          <a href="mailto:nnvedward@gmail.com" style={{ color: "inherit" }}>
            nnvedward@gmail.com
          </a>{" "}
        </p>

        <div className="summary">
          <p>
            Frontend Engineer with 6+ years of experience designing, building,
            and scaling web and mobile applications with React, Next.js,
            TypeScript, and React Native. Delivered products across healthcare,
            logistics, e-commerce, education, and AI, from architecture and API
            integration through performance, security, and testing. Led frontend
            teams, translated business requirements into technical solutions,
            and mentored engineers while keeping code clean, maintainable, and
            fast.
          </p>
        </div>

        <div className="divider">
          <p>Technical Skills</p>
          <span></span>
        </div>
        <div className="skills">
          <p>
            <strong>Languages:</strong> TypeScript, JavaScript (ES6+), HTML5,
            CSS3
          </p>
          <p>
            <strong>Frameworks and Libraries:</strong> React, Next.js, Angular,
            React Query (TanStack Query), GraphQL, Three.js
          </p>
          <p>
            <strong>Mobile:</strong> React Native
          </p>
          <p>
            <strong>Styling and UI:</strong> Tailwind CSS, Chakra UI, Material
            UI, SCSS, Styled Components, Shadcn, Framer Motion, GSAP
          </p>
          <p>
            <strong>Tools and Practices:</strong> Git, RESTful APIs, Performance
            Optimization, Responsive Design, Cross-Browser Compatibility,
            Testing, DevOps Basics (Vercel)
          </p>
          <p>
            <strong>Methodologies:</strong> Agile/Scrum, CI/CD, UX/UI Design
            Collaboration
          </p>
        </div>

        <div className="divider">
          <p>Professional Experience</p>
          <span></span>
        </div>
        <div>
          {experiences.map((experience) => (
            <ResumeCard
              {...experience}
              key={`${experience.company}-${experience.started}`}
            />
          ))}
        </div>

        <div className="divider">
          <p>Projects</p>
          <span></span>
        </div>
        <div className="exp_container">
          {projectHighlights.map((project) => (
            <section className="experience" key={project.name}>
              <p className="title">
                {project.name}{" "}
                <span>
                  <br />
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.url.replace(/^https?:\/\//, "")}
                  </a>
                </span>
              </p>
              <article className="description">
                <p>{project.description}</p>
                <p>
                  <span>•</span> <strong>Technologies:</strong> {project.tech}
                </p>
              </article>
            </section>
          ))}
        </div>

        <div className="divider">
          <p>Education and Certifications</p>
          <span></span>
        </div>
        <div className="exp_container">
          <section className="experience">
            <p className="title">
              Bachelor of Science, Computer Science
              <span>
                <br />
                Enugu State University of Science and Technology, Enugu, Nigeria
                | Sep 2015 - Oct 2019
              </span>
            </p>
          </section>
          <section className="experience">
            <p className="title">
              Meta Advanced React Certification
              <span>
                <br />
                Coursera | Dec 2022
              </span>
            </p>
          </section>
          <section className="experience">
            <p className="title">
              AI Fluency: Framework and Foundations
              <span>
                <br />
                Claude Academy | Nov 2026 |{" "}
                <a
                  href="https://academy.claude.com/verify/5709122cad75f4dc45184f0ea73a6507"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify
                </a>
              </span>
            </p>
          </section>
        </div>

        <div className="divider">
          <p>More</p>
          <span></span>
        </div>
        <div className="exp_container">
          <section className="experience">
            <article className="description">
              <p className="nospan">
                View selected work on the <Link to="/project">Projects</Link>{" "}
                page or reach out via <Link to="/contact">Contact</Link>.
              </p>
            </article>
          </section>
        </div>
      </div>
      <Button
        previous={{ url: "/project", text: "Projects" }}
        next={{ url: "/contact", text: "Contact" }}
      />
    </div>
  );
};

export default Resume;
