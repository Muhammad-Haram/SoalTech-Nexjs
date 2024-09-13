import React from "react";

const CompanyContainer = () => {
  return (
    <>
      <div className="company-container">
        <div className="company-wrapper">
          <div className="company-column">
            <p>For Healthcare Staffing</p>
            <img className="img-fluid" src="/img/kupplin.png" alt="" />
          </div>
          <div className="company-column">
            <p>For Light Industrial Solutions</p>
            <img className="img-fluid" src="/img/tekberry.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyContainer;
