import React from 'react'

const DeveloperDreamDiv = () => {
    return (
        <>
            <div class="dream-div">
                <div class="text-container-2 text-container">
                    <p class="dream-heading">We recruit for</p>

                    <ul class="dream-paragraph-2">
                        <li>Software Developer</li>
                        <li>Software Engineer</li>
                        <li>Web Developers</li>
                        <li>Front End Developer</li>
                        <li>UX/UI Designer</li>
                        <li>Full Stack Engineers</li>
                        <li>Web Designers</li>
                    </ul>
                    <p class="dream-paragraph">We also staff many other roles for IT professionals, including database administrator, network administrator, IT project manager, security engineer, and more.</p>
                    <div class="button-container-2">
                        <a href="/contact-us">Search for Jobs <span><img class="img-fluid" src='/img/arrow2.png' alt=""/></span></a>
                        <a href="/contact-us">Apply Now <span><img class="img-fluid" src='/img/arrow2.png' alt="" /></span></a>
                    </div>
                </div>
                <div class="dream-img-container">
                    <img class="img-fluid" src='/img/we-offer.png' alt=""/>
                </div>
            </div>
        </>
    )
}

export default DeveloperDreamDiv