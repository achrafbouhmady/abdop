import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const PortfolioIsotope = ({ noViewMore }) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".works-items", {
      itemSelector: ".works-col",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".works-col",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <Fragment>
      <div className="works-box">
        <div
          className="filter-links scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <a
            className={`c-pointer lui-subtitle ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
            data-href=".works-col"
          >
            All
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-ui-ux-design"
            )}`}
            onClick={handleFilterKeyChange("sorting-ui-ux-design")}
            data-href=".sorting-ui-ux-design"
          >
            Scientific papers
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn("sorting-photo")}`}
            onClick={handleFilterKeyChange("sorting-photo")}
            data-href=".sorting-photo"
          >
            Data Science
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-development"
            )}`}
            onClick={handleFilterKeyChange("sorting-development")}
            data-href=".sorting-development"
          >
            Numerical Analysis
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-branding"
            )}`}
            onClick={handleFilterKeyChange("sorting-branding")}
            data-href=".sorting-branding"
          >
            Reports &amp; Presentations
          </a>
        </div>
        <div className="works-items works-masonry-items row">
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="#">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/work4.jpeg"
                        alt="Zorro"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> DATA SCIENCE </span>
                <h5 className="name">
                  <Link legacyBehavior href="#">
                    <a>FoodHub Project Rubric</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  The food aggregator company has stored the data of the different orders made by the registered customers in their online portal. They want to analyze the data to get a fair idea about the demand of different restaurants which will help them in enhancing their customer experience. 
                   we Perform the data analysis to find answers to these questions that will help the company to improve the business. 
                  </p>
                </div>
                 {/*   <Link legacyBehavior href="#">
                  <a className="lnk">See project</a>
                </Link> */}
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-ui-ux-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="#">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/work2.jpeg"
                        alt="Gooir"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> SCIENTIFIC PAPERS </span>
                <h5 className="name">
                  <Link legacyBehavior href="#">
                    <a>Optimal pricing strategy</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  This study provides a comprehensive analysis of pricing and advertising strategies, market equilibrium, and strategic interactions among firms in competitive environments.  
                  Expanding the analysis to competitive market scenarios, the study investigates the stability of the model within a mean field game framework, considering specific parameter assumptions based on product characteristics.
                  </p>
                </div>
                 {/*   <Link legacyBehavior href="#">
                  <a className="lnk">See project</a>
                </Link> */}
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>

          
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="#">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/work7.webp"
                        alt="Explore"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Scientific papers / Numerical Analysis </span>
                <h5 className="name">
                  <Link legacyBehavior href="#">
                    <a>Mean field games strategy in finance</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Mean field games strategy in finance is a dynamic modeling framework that combines game theory and optimization techniques to analyze the behavior of a large number of interacting agents in a financial market. It provides a powerful tool for understanding the strategic decision-making process of individual market participants and the collective behavior that emerges from their interactions.
                  </p>
                </div>
                 {/*   <Link legacyBehavior href="#">
                  <a className="lnk">See project</a>
                </Link> */}
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>


          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="#">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/work1.jpeg"
                        alt="Mozar"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> DATA SCIENCE </span>
                <h5 className="name">
                  <Link legacyBehavior href="#">
                    <a>Predicting Potential Customers</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  The EdTech industry has been surging in the past decade immensely, and according to a forecast, the Online Education market, would be worth $286.62bn by 2023, with a compound annual growth rate (CAGR) of 10.26% from 2018 to 2023. The modern era of online education has enforced a lot in its growth and expansion beyond any limit. Due to having many dominant features like ease of information sharing, personalized learning experience, transparency of assessment, etc., it is now preferable to traditional education.
                  </p>
                </div>
                 {/* <Link legacyBehavior href="#">
                  <a className="lnk">See project</a>
                </Link> */}
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-ui-ux-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="#">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/single8.gif"
                        alt="Stay Fit"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Numerical Analysis </span>
                <h5 className="name">
                  <Link legacyBehavior href="#">
                    <a>Nonlinear Estimation</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Nonlinear estimation using MATLAB refers to the process of estimating unknown parameters in a nonlinear mathematical model using the MATLAB software. In many real-world applications, mathematical models are often nonlinear, meaning that the relationships between variables cannot be expressed as simple linear equations. Nonlinear estimation methods, such as the nonlinear least squares method, are employed to estimate the values of unknown parameters in these models.
                  </p>
                </div>
                 {/*   <Link legacyBehavior href="#">
                  <a className="lnk">See project</a>
                </Link> */}
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development sorting-photo ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="#">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/single6.jpg"
                        alt="Kana"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Numerical Analysis </span>
                <h5 className="name">
                  <Link legacyBehavior href="#">
                    <a>Finite volume method</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  he finite volume method is a numerical technique used to solve partial differential equations (PDEs) by discretizing the domain into a finite number of control volumes. It is particularly well-suited for problems involving conservation laws, such as fluid dynamics, heat transfer, and mass transport.

In the finite volume method, the domain of interest is divided into a mesh of control volumes or cells. The PDEs are then integrated over each control volume, resulting in a set of algebraic equations that relate the values of the unknown variables at the cell centers. These equations represent the conservation of physical quantities (e.g., mass, energy, or momentum) within each control volume.
                  </p>
                </div>
                {/*   <Link legacyBehavior href="#">
                  <a className="lnk">See project</a>
                </Link> */}
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
        </div>
        {!noViewMore && (
          <div className="load-more-link">
            <Link legacyBehavior href="/works">
              <a
                className="btn scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>View More</span>
              </a>
            </Link>
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default PortfolioIsotope;
