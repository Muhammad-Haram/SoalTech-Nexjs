import React from 'react'

const AboutMission = () => {
    return (
        <div>
            <div className="bg-grey">
                <div className="mission-text-container">
                    <p className="mission-heading">Our mission is to be the most successful staffing solutions company in the markets we serve by striving to surpass the expectations of customers, partners, and team members.</p>
                    <p className="mission-paragraph">In 2010, after more than 15 years of working for industry-leading tech firms, two friends came together and founded SOAL TECHNOLOGIES, one of the best staffing agencies in Austin. They are passionate about developing solutions that exceed clients’ expectations. SOAL TECHNOLOGIES is a team of highly skilled recruiters and consultants with a broad range of knowledge. We also help clients with business solutions using our extensive experience in technology architecture development, custom development service, and technical support management.</p>
                    <div className="mission-button-container">
                        <a href="/">Apply Now <span><img className="img-fluid" src='/img/Arrow1.png' alt="" /></span></a>
                    </div>
                </div>
                <div className="mission-image-container">
                    <img className="img-fluid" src='/img/iphone-15.png' alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutMission