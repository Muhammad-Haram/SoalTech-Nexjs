import TeamAllcards from '@/components/TeamAllcards'
import TeamBanner from '@/components/TeamBanner'
import TeamGallery from '@/components/TeamGallery'
import React from 'react'

const page = () => {
    return (
        <div className="team-section">
            <TeamBanner />
            <TeamAllcards />
            <TeamGallery/>
        </div>
    )
}

export default page