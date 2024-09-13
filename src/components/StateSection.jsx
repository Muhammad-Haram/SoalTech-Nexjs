import React from "react";

const StateSection = () => {
  return (
    <>
      <section className="states-section">
        <div className="projects">
          <img
            src='/img/pr.png'
            alt=""
          />
          <div className="pr-text">
            <h1>458+</h1>
            <p>Projects</p>
          </div>
        </div>
        <div className="hiring">
          <div className="hr-text">
            <h1>1800+</h1>
            <p>Hiring</p>
          </div>
          <img
            src='/img/hiring.png'
            alt=""
          />
        </div>
        <div className="clients">
          <img
            src='/img/clients.png'
            alt=""
          />
          <div className="clients-text">
            <h1>382</h1>
            <p>Clients</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default StateSection;
