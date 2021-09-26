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
                <li><FontAwesomeIcon icon={faYoutube} /> </li>
                <li><FontAwesomeIcon icon={faFacebook} /></li>
                <li><FontAwesomeIcon icon={faTwitter} /></li>
                <li><FontAwesomeIcon icon={faLinkedin} /></li>
                </ul>
            </div>       
        </>
    )
}