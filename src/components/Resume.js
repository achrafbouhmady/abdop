import { useState } from "react";

const educationData = [
  {
    id: 1,
    title: "Applied Mathematics",
    academy: "Ph.D Student: Control theory & MFG",
    dec: "As a Ph.D. student, my research focuses on the intersection of Control Theory and MFG. I aim to develop novel control strategies for large-scale systems by leveraging the tools and techniques from both fields. By combining the principles of Control Theory with the insights from MFG, I hope to contribute to the development of efficient and robust control algorithms that can be applied to real-world problems.",
    startYear: "2020",
    endYear: "PRESENT",
  },
  {
    id: 2,
    title: "MIT - Massachusetts Institute of Technology",
    academy: " DATA SCIENCE / MACHINE LEARNING: MAKING DATA-DRIVEN DECISIONS",
    dec: "This MIT Program equips me with the skills and knowledge to make informed decisions using data-driven approaches. Through hands-on projects and case studies, and  practical experience in applying these techniques to real-world problems. Upon completion. This program offers me a valuable opportunity to develop expertise in data-driven decision-making and effectively utilize these techniques across various domains.",
    startYear: "jun 2023",
    endYear: "Dec 2023",
  },
  {
    id: 3,
    title: "Mohammed V university",
    academy: "Master's degree: Mathematical analysis and decision making",
    dec: "This program equips me with a deep understanding of fundamental mathematics, including topics such as Algebra and Functional Analysis. It also covers mathematical modeling, optimization, and statistical analysis, enabling me to tackle complex problems and make informed decisions across various fields. Through rigorous coursework and engaging research projects, I have the opportunity to develop strong analytical and problem-solving skills. The program places a strong emphasis on the practical application of mathematical techniques in real-world scenarios, preparing graduates for successful careers in industries such as finance, logistics, operations research, and data analysis.",
    startYear: "2010",
    endYear: "2012",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Data Analyst",
    company: "Cnalogistic",
    dec: "As a data analytics professional in Cnalogistics, my role involves utilizing various machine learning and deep learning models such as XGBOOST, LSTM, etc. for forecasting purposes. I am responsible for building and applying these models in the logistics and finance domains. By leveraging these advanced techniques, I contribute to improving decision-making processes and optimizing operations in these fields.",
    startYear: "2020",
    endYear: false,
  },
  {
    id: 2,
    title: "Vacation Professor in Statistics",
    company: "Faculty of Economic and Social Sciences - Agdal",
    dec: "As a teacher for Bachelor's degree students in economics and management, my role involves applying descriptive statistical methods and techniques to present data effectively and provide valuable information. Additionally, I teach students about sampling methods and hypothesis testing, enabling them to understand how to collect unbiased data and analyze it accurately. By imparting this knowledge, I equip students with the necessary skills to make informed decisions based on reliable data analysis.",
    startYear: "2022",
    endYear: "2023",
  },
  {
    id: 3,
    title: "Vacation Professor in Mathematics and Computing science",
    company: "Faculty of Sciences",
    dec: "As a teacher for students in mathematics and computer science, I have the responsibility of teaching two modules. The first module is Mathematical Analysis, where I cover topics such as functions, numerical sequences, and the development of limits for functions. I also delve into function integrals and their applications. The second module focuses on Numerical Analysis, where I teach algorithms such as Cholesky and Gauss methods that are utilized to solve nonlinear equations. Additionally, I guide students in practical implementation by showcasing how these algorithms can be applied using MATLAB. In this context, I also provide instruction on utilizing MATLAB for functions and function integrals.",
    startYear: "2021",
    endYear: false,
  },
];

const Resume = () => {
  const [educationToggle, setEducationToggle] = useState(1);
  const [experienceToggle, setExperienceToggle] = useState(1);
  return (
    <section className="lui-section lui-gradient-bottom" id="resume-section">
      {/* Heading */}
      <div className="lui-heading">
        <div className="container">
          <div className="m-titles align-center">
            <h2
              className="m-title splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span> Resume </span>
            </h2>
            <div
              className="m-subtitle splitting-text-anim-1 scroll-animate"
              data-splitting="words"
              data-animate="active"
            >
              <span>
                {" "}
                my <b>Story</b>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* History */}
      <div className="v-line v-line-left">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Education </span>
              </h5>
              <div className="history-items">
                {educationData.map((education, i) => (
                  <div
                    key={education.id}
                    className={`history-item lui-collapse-item scroll-animate ${
                      educationToggle === education.id ? "opened" : ""
                    }`}
                    data-animate="active"
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        educationToggle == education.id ? "active" : ""
                      }`}
                      onClick={() =>
                        setEducationToggle(
                          educationToggle == education.id ? null : education.id
                        )
                      }
                    >
                      <span> {education.academy} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {education.title} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {education.startYear} - {education.endYear}{" "}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{education.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <h5
                className="history-title scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span> Experience </span>
              </h5>
              <div className="history-items">
                {experienceData.map((experience) => (
                  <div
                    className={`history-item lui-collapse-item scroll-animate ${
                      experience.id == experienceToggle ? "opened" : ""
                    }`}
                    data-animate="active"
                    key={experience.id}
                  >
                    <h6
                      className={`name lui-collapse-btn ${
                        experienceToggle == experience.id ? " active" : ""
                      }`}
                      onClick={() => setExperienceToggle(experience.id)}
                    >
                      <span> {experience.title} </span>
                    </h6>
                    <div className="history-content">
                      <div className="subname">
                        <span> {experience.company} </span>
                      </div>
                      <div className="date lui-subtitle">
                        <span>
                          {" "}
                          {experience.startYear} -{" "}
                          {experience.endYear ? (
                            experience.endYear
                          ) : (
                            <b>Present</b>
                          )}
                        </span>
                      </div>
                      <div className="text">
                        <div>
                          <p>{experience.dec}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lui-bgtitle">
            <span> History </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Resume;
