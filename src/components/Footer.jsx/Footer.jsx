import React from 'react'
import { FollowUs } from './FollowUs'
import "./footer.scss"
import { Links } from './Links'

export const Footer = () => {


    return (
        <div className="footerContainer">
            <FollowUs />
            <Links />
            <hr></hr>
            <p>@ THe Hacker News, 2021. All Rights Reserved.</p>
        </div>
    )
}