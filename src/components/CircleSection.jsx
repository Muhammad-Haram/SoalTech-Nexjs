import React from "react";

const CircleSection = () => {
  return (
    <>
      <section className="circles-section">
        <div className="circles-section-text">
          <h1>Job Categories</h1>
          <p>
            Find your dream job in a variety of fields! We have listings across
            General, Technical, Healthcare, and cyber security staffing.
          </p>
        </div>
        <div className="circles">
          <img
            src='/img/circles.png'
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default CircleSection;
