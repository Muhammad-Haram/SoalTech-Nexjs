import React from "react";

const CardContanier = () => {
  return (
    <>
      <section className="card-container">
        <div className="cards">
          <div className="card">
            <div className="card-gradient">
              <h2>
                LOOKING FOR
                <br />
                PERFECT HIRE?
              </h2>
              <div className="card-button">
                <a href="/general-staffing">
                  See More{" "}
                  <span>
                    <img className="img-fluid" src="/img/Arrow1.png" alt="" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="card img2">
            <div className="card-gradient">
              <h2>
                LOOKING FOR
                <br />
                PERFECT JOB?
              </h2>
              <div className="card-button">
                <a href="/general-staffing">
                  See More{" "}
                  <span>
                    <img className="img-fluid" src="/img/Arrow1.png" alt="" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="card img3">
            <div className="card-gradient">
              <h2>
                SOLUTION
                <br />
                FOR BUSINESS
              </h2>
              <div className="card-button">
                <a href="/business-consulting">
                  See More{" "}
                  <span>
                    <img className="img-fluid" src="/img/Arrow1.png" alt="" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardContanier;
