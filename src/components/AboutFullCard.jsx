import React from 'react'

const AboutFullCard = () => {
    return (
        <>
            <div className="dream-div">

                <div className="text-container">
                    <p className="dream-heading">Your Dream Jobs Are Waiting</p>
                    <p className="dream-paragraph">Over 1 million interactions, 50,000 success stories Make yours now.</p>
                    <div className="button-container-2">
                        <a href="/about-us">Search for Jobs <span><img className="img-fluid" src='/images/arrow2.png' alt="" /></span></a>
                        <a href="/contact-us">Apply Now <span><img className="img-fluid" src='/images/arrow2.png' alt="" /></span></a>
                    </div>


                </div>
                <div className="dream-img-container">
                    <img className="img-fluid" src='/img/your-dream.png' alt="" />
                </div>
            </div>
        </>
    )
}

export default AboutFullCard