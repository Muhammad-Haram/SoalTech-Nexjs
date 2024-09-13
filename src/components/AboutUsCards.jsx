import React from 'react'

const AboutUsCards = () => {
    return (
        <>
            <section className="cards-aboutus">
                <div className="cards-aboutus-container">
                    <img className="img-3" src='/img/img3.png' alt="" />
                    <div className="cards-aboutus-text">
                        <h1 className="card-aboutus-head">THREE-TIERED VETTING PROCESS</h1>
                        <p className="card-aboutus-para">From shortlisting top candidates to their background checks, SOAL TECHNOLOGIES, one of the leading technical job agencies, has a three-tiered vetting process that helps employers evaluate which cutting-edge talent to add to their pipeline or recruit to fill a vacant position in their company credibly. Employers rely on our end-to-end recruitment services backed by decades of recruitment experience.</p>
                    </div>
                </div>

                <div className="cards-aboutus-container mission-card">
                    <img className="img-2" src='/img/img2.png' alt="" />
                    <div className="cards-aboutus-text">
                        <h1 className="card-aboutus-head">OUR MISSION</h1>
                        <p className="card-aboutus-para">We make lasting connections and strive to deliver what we promise, connecting great employers with even more incredible talent while being one of the best tech staffing agencies. We make lasting connections and strive to deliver what we promise, connecting great employers with even more incredible talent.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUsCards