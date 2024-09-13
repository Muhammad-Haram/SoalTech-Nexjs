import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <img src="/img/logo.png" alt="" />
          <p className="fo-blue-txt">Our Google Reviews</p>
          <div className="rating">
            <h6>5.0</h6>
            <img src="/img/reviews.png" alt="" />
          </div>
          <p className="fo-rev">Based on 51 reviews</p>
          <p className="fo-tin-txt">
            SOAL Technologies © 2024. All Rights Reserved. Privacy Policy.
          </p>
          <p className="fo-tin-txt">
            Web Design Bristol | SEO Bristol | PPC Bristol | Branding
          </p>
        </div>
        <div className="footer">
          <p className="fo-blue-txt">Got a project in mind?</p>
          <a href="mailto:admin@SOALtechonolgies.com">
            admin@SOALtechonolgies.com
          </a>
          <p className="fo-number">
            <a href="callto:+0 (117) 318 1799">0117 318 1799</a>
          </p>
          <div className="social-icon">
            <a
              href="https://www.facebook.com/Kupplin-Worldwide-LLC-879602912053917/"
              style={{ marginBottom: "0px" }}
            >
              <img src="/img/facebook.png" alt="" />
            </a>
            <a
              href="https://www.instagram.com/soaltechnologies/"
              style={{ marginBottom: "0px" }}
            >
              <img src="/img/insta.png" alt="" />
            </a>
            <a
              href="https://www.linkedin.com/company/soal-technologies"
              style={{ marginBottom: "0px" }}
            >
              <img src="/img/linkedin.png" alt="" />
            </a>
          </div>
          <p className="fo-tin-txt">
            Arcade Chambers, 8 Kings Road <br />
            Bristol, BS8 4AB
          </p>
        </div>
        <div className="footer">
          <p>
            <a href="/about-us" style={{ textDecoration: 'none' }}>
              Looking for Hiring?
            </a>
          </p>
          <p>
            <a href="/contact-us" style={{ textDecoration: 'none' }}>
              Looking for job?
            </a>
          </p>
          <p>
            <a href="/business-consulting" style={{ textDecoration: 'none' }}>
              Looking for business?
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
