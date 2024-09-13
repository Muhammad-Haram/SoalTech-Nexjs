import React from 'react'

const AboutFullCard = () => {
    return (
        <>
            <div class="dream-div">

                <div class="text-container">
                    <p class="dream-heading">Your Dream Jobs Are Waiting</p>
                    <p class="dream-paragraph">Over 1 million interactions, 50,000 success stories Make yours now.</p>
                    <div class="button-container-2">
                        <a href="/about-us">Search for Jobs <span><img class="img-fluid" src='/images/arrow2.png' alt="" /></span></a>
                        <a href="/contact-us">Apply Now <span><img class="img-fluid" src='/images/arrow2.png' alt="" /></span></a>
                    </div>


                </div>
                <div class="dream-img-container">
                    <img class="img-fluid" src='/img/your-dream.png' alt="" />
                </div>
            </div>
        </>
    )
}

export default AboutFullCard