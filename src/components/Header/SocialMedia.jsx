import React from 'react'
import "./header.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faFacebook, faTwitter,  faLinkedin} from '@fortawesome/free-brands-svg-icons'


export const SocialMedia = () => {
    return (
        <>
            <div className="socialContainer">
                <ul className="socialNetwork">
                <li><p>Follow us</p></li>
                <li><a href=""><FontAwesomeIcon icon={faYoutube} /> </a> </li>
                <li><a href=""><FontAwesomeIcon icon={faFacebook} /> </a></li>
                <li><a href=""><FontAwesomeIcon icon={faTwitter} /> </a></li>
                <li><a href=""><FontAwesomeIcon icon={faLinkedin} /> </a></li>
                </ul>
            </div>       
        </>
    )
}