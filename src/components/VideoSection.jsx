import React from "react";

const VIdeoSection = () => {
  return (
    <>
      <div className="video-section">
        <p className="heading">
          Landing Your Dream Job Is A Reality With{" "}
          <span>
            <img className="img-fluid" src="/img/logo.png" alt="" />
          </span>
        </p>
        <p className="paragraph">
          We turn your ideas into numbers. SOAL TECHNOLOGIES helps you grow your
          Career with a proven record of successful case studies and innovative
          recruiting models.
        </p>
        <div className="video-1">
          <img className="img-fluid" src="/img/steptodown4.png" alt="" />
          <div className="play-btn popup-btn">
            <button>
              <span>
                <img className="img-fluid" src="/img/Polygon8.png" alt="" />
              </span>{" "}
              See More
            </button>
          </div>
        </div>
      </div>

      <div className="video-popup">
        <div className="popup-bg"></div>
        <div className="popup-content">
          <iframe
            src="https://www.youtube.com/embed/75pNkVlJNEY?si=eau9Y4UfwWVufPjK?autoplay=0"
            className="video"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default VIdeoSection;
