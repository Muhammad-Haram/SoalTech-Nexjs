import Script from "next/script";
import React from "react";
const Navbar = () => {
  return (
    <>
      <Script src="/scripts/script.js" strategy="lazyOnload"></Script>
      {/* <!-- header --> */}
      <div id="header">
        <div className="nav">
          <div className="logo">
            <a href="/">
              <img src={"/img/logo.png"} className="cursor-color" alt="" />
            </a>
          </div>

          <div className="menu-icon">
            <div className="menu bar">
              <p>Menu</p>
              <img src={"/img/open.png"} className="cursor-color" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- menu  --> */}
      <div className="nav-info">
        <div className="nav-close">
          <div className="logo">
            <a href="/">
              <img src={"/img/logo.png"} className="cursor-color" alt="" />
            </a>
          </div>

          <div className="menu-icon">
            <div className="menu close">
              <p>Close</p>
              <img src={"/img/close.png"} className="cursor-color" alt="" />
            </div>
          </div>
        </div>

        <div className="nav-content">
          <div className="nav-buttons">
            <div className="nav-btn-container">
              <buttons className="nav-btn">
                <a href="/">Home</a>
              </buttons>
              <img src={"/img/soul2.png"} className="isActive" alt="" />
            </div>
            <div className="nav-btn-container">
              <buttons className="nav-btn" data-nav="nav1">
                About Us
              </buttons>

              <img src={"/img/soul2.png"} className="isActive" alt="" />
            </div>

            <div className="nav-btn-container">
              <buttons className="nav-btn">
                <a href="#">Job Search</a>
              </buttons>
              <img src={"/img/soul2.png"} className="isActive" alt="" />
            </div>

            <div className="nav-btn-container">
              <buttons className="nav-btn" data-nav="nav3">
                Employers
              </buttons>
              <img src={"/img/soul2.png"} className="isActive" alt="" />
            </div>

            <div className="nav-btn-container">
              <buttons className="nav-btn" data-nav="nav4">
                Services
              </buttons>
              <img src={"/img/soul2.png"} className="isActive" alt="" />
            </div>

            <div className="nav-btn-container">
              <buttons className="nav-btn">
                <a href="/our-clients">Clients</a>
              </buttons>
              <img src={"/img/soul2.png"} className="isActive" alt="" />
            </div>

            <div className="nav-btn-container">
              <buttons className="nav-btn">
                <a href="/refer-a-friend">Refer A Friend</a>
              </buttons>
              <img src={"/img/soul2.png"} className="isActive" alt="" />
            </div>

            <div className="nav-btn-container">
              <buttons className="nav-btn">
                <a href="/blogs">Blogs</a>
              </buttons>
              <img src={"/img/soul2.png"} className="isActive" alt="" />
            </div>

            <div className="nav-btn-container">
              <buttons className="nav-btn">
                <a href="/contact-us">Contact</a>
              </buttons>
              <img src={"/img/soul2.png"} className="isActive" alt="" />
            </div>
          </div>

          <div className="nav-line"></div>

          <div className="nav-list">
            <div id="nav1" className="nav-links">
              <ul>
                <li>
                  <a href="/about-us">About SOAL</a>
                </li>
                <li>
                  <a href="/our-team">The SOAL Team</a>
                </li>
                <li>
                  <a href="/why-choose-soal/">Why Choose SOAL</a>
                </li>
                <li>
                  <a href="#">Capabilities Statements</a>
                </li>
                <li>
                  <a href="#">Brouchers</a>
                </li>
                <li>
                  <a href="#">General Staffing Solution</a>
                </li>
                <li>
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
              </ul>
            </div>

            {/* <!--               <div id="nav2" className="nav-links">
             <ul>
               <li><a href="#">Job Search</a></li>
               <li><a href="#">Job Search</a></li>
               <li><a href="#">Job Search</a></li>
               <li><a href="#">Job Search</a></li>
               <li><a href="#">Job Search</a></li>
             </ul>
           </div> --> */}

            <div id="nav3" className="nav-links">
              <ul>
                <li>
                  <a href="/areas-of-expertise">Areas Of Expertise</a>
                </li>
              </ul>
            </div>

            <div id="nav4" className="nav-links">
              <ul>
                <li>
                  <a href="/general-staffing">General Staffing</a>
                </li>
                <li>
                  <a href="/business-consulting">
                    Business Solutions Consulting and Staffing
                  </a>
                </li>
                <li>
                  <a href="/cyber-security">Cyber Security</a>
                </li>
                <li>
                  <a href="/developers">Developers</a>
                </li>
                <li>
                  <a href="/gsa-schedule">GSA Schedule</a>
                </li>
                <li>
                  <a href="/dir-staff">DIR Staff Augmentation Contract</a>
                </li>
                <li>
                  <a href="/dbits">
                    Deliverables Based Information Technology Services (DBITS)
                  </a>
                </li>
              </ul>
            </div>

            {/* <!--               <div id="nav5" className="nav-links">
             <ul>
               <li><a href="#">Clients</a></li>
               <li><a href="#">Clients</a></li>
               <li><a href="#">Clients</a></li>
               <li><a href="#">Clients</a></li>
               <li><a href="#">Clients</a></li>
             </ul>
           </div> --> */}

            {/* <!--               <div id="nav6" className="nav-links">
             <ul>
               <li><a href="#">Refer A Freind</a></li>
               <li><a href="#">Refer A Freind</a></li>
               <li><a href="#">Refer A Freind</a></li>
               <li><a href="#">Refer A Freind</a></li>
               <li><a href="#">Refer A Freind</a></li>
             </ul>
           </div> --> */}

            {/* <!--               <div id="nav7" className="nav-links">
             <ul>
               <li><a href="#">Blogs</a></li>
               <li><a href="#">Blogs</a></li>
               <li><a href="#">Blogs</a></li>
               <li><a href="#">Blogs</a></li>
               <li><a href="#">Blogs</a></li>
             </ul>
           </div> --> */}

            {/* <!-- 				<div id="nav8" className="nav-links">
             <ul>
               <li><a href="#">Blogs</a></li>
               <li><a href="#">Blogs</a></li>
               <li><a href="#">Blogs</a></li>
               <li><a href="#">Blogs</a></li>
               <li><a href="#">Blogs</a></li>
             </ul>
           </div> --> */}
          </div>
        </div>

        <div className="nav-contact">
          <a href="mailto:info@soaltech.com">info@soaltech.com</a>
          <p>8870 Business Park Dr. Ste. 200 Austin, TX 78759</p>
          <p className="number">
            <a href="callto:+1 (512) 270 6700">+1 (512) 270 6700</a>
          </p>
        </div>
      </div>
      {/* <!-- menu end  --> */}
    </>
  );
};

export default Navbar;
