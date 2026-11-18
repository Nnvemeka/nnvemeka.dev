import React from "react";
import "../../components/resume/Resume.css";

const ResumeCard = ({
  company,
  position,
  started,
  ended,
  description,
  achievements,
}) => (
  <div className="exp_container">
    <section className="experience">
      <p className="title">
        {company} - <i>{position}</i>
        <span>
          <br />
          {started} - {ended || "Present"}
        </span>
      </p>
      <article className="description">
        {description ? <p>{description}</p> : null}
        {achievements.map((achievement) => (
          <p key={achievement}>
            <span>•</span> {achievement}
          </p>
        ))}
      </article>
    </section>
  </div>
);

export default ResumeCard;