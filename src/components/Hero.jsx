import React from "react";

function Hero() {
  return (
    <>
      <section className="bg-image">
        <div className="bg-black">
          {/* <?php get_template_part('includes/section','menu');?> */}

          {/* <!-- hero content  --> */}
          <div className="content">
            <h1>
              Anything’s possible when you have the <span>talent</span>
            </h1>
            <p>
              Find skilled candidates, in-demand jobs and the solutions you need
              to help you do your best work yet with a leading staffing agency
              Austin.
            </p>

            <div className="buttons">
              <div className="button-one">
                <p>For Job Seekers</p>
                <a href="/general-staffing" className="Allbtn">
                  Find your next job
                </a>
              </div>

              <div className="break">
                <div className="br-line"></div>
              </div>

              <div className="buttons-two">
                <p>For Job Businesses</p>
                <div className="btn-two-con">
                  <a href="/contact-us" className="Allbtn">
                    Find your next hire
                  </a>
                  <a href="/business-consulting" className="Allbtn">
                    Explore consulting solution
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- hero content end  --> */}
        </div>
      </section>
    </>
  );
}

export default Hero;
