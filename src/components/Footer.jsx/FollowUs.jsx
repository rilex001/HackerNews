import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faFacebook, faTwitter,  faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons'


export const FollowUs = () => {
    return (
        <>
        <div className="followUstitle">
            <p>Follow Us</p>
            <hr className="hrTitle"></hr>
        </div>
        <div className="socialFooter">
            <div>
                <FontAwesomeIcon icon={faTwitter}  size='3x'/>
                <p className="followersNumber">725,300 Followers</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faFacebook} size='3x'/>
                <p className="followersNumber">1,985,000 Followers</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faLinkedin} size='3x'/>
                <p className="followersNumber">240,100 Followers</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faYoutube} size='3x'/>
                <p className="followersNumber">18,100 Followers</p>
            </div>
            <div>
                <FontAwesomeIcon icon={faInstagram} size='3x'/>
                <p className="followersNumber">125,500 Followers</p>
            </div>
        </div>
        </>
    )
}