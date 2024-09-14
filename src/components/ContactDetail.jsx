import React from 'react'

const ContactDetail = () => {
    return (
        <>

            <div class="content-text">
                <p class="content-heading">Contact Information</p>
                <div class="content-info">
                    <img class="img-fluid" src='/img/location.png' alt="" />
                    <p>8870 Business Park Dr. Ste. 200 Austin, TX 78759</p>
                </div>
                <div class="content-info">
                    <img class="img-fluid" src='/img/location.png' alt="" />
                    <p>2450 Lakeside Parkway Suite 150 #1001 Flower Mound, TX 75022</p>
                </div>
                <div class="content-info">
                    <img class="img-fluid" src='/img/location.png' alt="" />
                    <p>20 S. Third Street Suite 210 Columbus, OH 43215</p>
                </div>
                <div class="content-info">
                    <img class="img-fluid" src='/img/website.png' alt="" />
                    <p><a href="mailto:info@soaltech.com">info@soaltech.com</a></p>
                </div>
                <div class="content-info">
                    <img class="img-fluid" src='/img/mbnum.png' alt="" />
                    <p><a href="callto:+1 (512) 270 6700">+1 (512) 270 6700</a></p>
                </div>
            </div>

        </>
    )
}

export default ContactDetail