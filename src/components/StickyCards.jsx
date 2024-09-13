import React from "react";

const StickyCards = () => {
  return (
    <>
      <section className="sticky-scroller">
        <div className="ss-left">
          <h1>What We Do</h1>
          <p>
            At SOAL Technologies, we connect top talent with employers and vice
            versa. Our mission is to provide tailored staffing solutions to
            encourage growth and success for both parties.
          </p>
        </div>

        <div className="ss-right">
          <div className="ss-right-card">
            <img
              src='/img/circles-logo.png'
              alt=""
            />

            <h1>Solutions For Talent</h1>
            <p>
              We, the best staffing agency in Austin, empower your career
              journey by connecting you with top employers. We provide career
              guidance, access to job opportunities, and professional
              development resources to job seekers. Our skilled team assists
              candidates in matching their skills with the perfect roles.
            </p>

            <div className="ss-right-btn">
              <a href="/general-staffing">Find out more</a>
              <img
                src='/img/anchorarrow.png'
                alt=""
              />
            </div>
          </div>

          <div className="ss-right-card">
            <img
              src='/img/circles-logo.png'
              alt=""
            />

            <h1>Solution For Employers</h1>
            <p>
              We help companies to streamline their hiring process to find the
              right talent. Our professional recruiters have expertise in
              sourcing, screening, and interviewing processes. SOAL TECHNOLOGIES
              focuses on providing reliable services that fit your company’s
              culture and goals.
            </p>

            <div className="ss-right-btn">
              <a href="/general-staffing">Find out more</a>
              <img
                src='/img/anchorarrow.png'
                alt=""
              />
            </div>
          </div>

          <div className="ss-right-card">
            <img
              src='/img/circles-logo.png'
              alt=""
            />

            <h1>Solution For Business</h1>
            <p>
              Our business solutions offer comprehensive staffing services to
              help companies of all sizes. We are considered among the top
              staffing agencies for our holistic approaches, which include
              permanent, temporary, and contract placements to meet your
              business requirements. Join hands with us to optimize your HR
              operations and achieve long-term growth.
            </p>

            <div className="ss-right-btn">
              <a href="/business-consulting">Find out more</a>
              <img
                src='/img/anchorarrow.png'
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StickyCards;
