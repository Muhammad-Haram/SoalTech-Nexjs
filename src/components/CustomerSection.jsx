import React from "react";

const CustomerSection = () => {
  return (
    <>
      <section className="customer-section">
        <div className="cus-sec-text">
          <div className="text-head">
            <h1>See how our customers drive impact</h1>
            <div className="text-anchor">
              <a href="#">Read more success stories</a>
              <img
                className="img-fluid"
                src='/img/anchorarrow.png'
                alt=""
              />
            </div>
          </div>

          <div className="text-box">
            <h2>
              “It takes the right person to make the right decision at the right
              time. Sometimes those decisions are crucial enough to make or
              break a company. The competent IT staffing service by SOAL
              TECHNOLOGIES ensures that you hire well and you hire smart”
            </h2>
            <p>
              Jeff Smestuen, Director, Germania Farm <br />
              Mutual Insurance
            </p>
          </div>
        </div>

        <div className="cus-sec-award">
          <h1>Awards and Recognition</h1>
          <div className="awards">
            <img
              src='/img/1.png'
              alt=""
            />
            <img
              src='/img/2.png'
              alt=""
            />
            <img
              src='/img/3.png'
              alt=""
            />
            <img
              src='/img/4.png'
              alt=""
            />
            <img
              src='/img/5.png'
              alt=""
            />
            <img
              src='/img/6.png'
              alt=""
            />
            <img
              src='/img/7.png'
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerSection;
