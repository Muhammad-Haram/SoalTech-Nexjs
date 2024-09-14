import ContactDetail from '@/components/ContactDetail'
import ContactForm from '@/components/ContactForm'
import React from 'react'

const page = () => {
    return (
        <>
            <section class="contact-container">
                <div class="contact-wrapper">
                    <ContactDetail />
                    <ContactForm />
                </div>
            </section>
        </>
    )
}

export default page