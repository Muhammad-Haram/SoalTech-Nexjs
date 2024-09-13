import React from 'react'

const HowWeWork = () => {
    return (
        <>
            <div className="hww-container">
                <div className="hww-main">
                    <p className="hww-heading">How It Works</p>
                    <p className="hww-paragraph">The right resources to help you achieve your career goals or find</p>
                </div>
                <div className="hww-cards">
                    <div className="bg-sliver">
                        <img className="img-fluid" src='/img/search-hww.png' alt="" />
                        <p className="small-heading">Step 1</p>
                        <p className="small-paragraph-1">Check Out Your Options</p>
                        <p className="small-paragraph-2">Check out our Job Boards</p>
                    </div>
                    <div className="hww-arrow">
                        <img className="img-fluid" src='/img/arrow3.png' alt="" />
                    </div>
                    <div className="bg-sliver">
                        <img className="img-fluid" src='/img/touch-hww.png' alt="" />
                        <p className="small-heading">Step 2</p>
                        <p className="small-paragraph-1">Get In Touch</p>
                        <p className="small-paragraph-2">Send the SOAL recruiting team your updated resume</p>
                    </div>
                    <div className="hww-arrow">
                        <img className="img-fluid" src='/img/arrow3.png' alt="" />
                    </div>
                    <div className="bg-sliver">
                        <img className="img-fluid" src='/img/call-hww.png' alt="" />
                        <p className="small-heading">Step 3</p>
                        <p className="small-paragraph-1">Recruiter Call</p>
                        <p className="small-paragraph-2">One of our excellent tech recruiters will contact you to discuss your technical skills and location/salary preferences.</p>
                    </div>
                    <div className="hww-arrow">
                        <img className="img-fluid" src='/img/arrow3.png' alt="" />
                    </div>
                    <div className="bg-sliver">
                        <img className="img-fluid" src='/img/handle-hww.png' alt="" />
                        <p className="small-heading">Step 4</p>
                        <p className="small-paragraph-1">Let Us Handle It All</p>
                        <p className="small-paragraph-2">Set up interviews according to your schedule. Please discuss your job offer with you!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowWeWork