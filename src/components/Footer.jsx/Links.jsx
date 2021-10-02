import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifi } from '@fortawesome/free-solid-svg-icons'
import { faFileContract } from '@fortawesome/free-solid-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import "./footer.scss"

export const Links = () => {
    return (
        <div className="LinksContainer">
            <div className="links">
                <p className="linksTitle">About Us</p>
                <p>Advertising</p>
                <p>Editorial Team</p>
                <p>Contact</p>
            </div>
            <div className="links">
                <p className="linksTitle">RSS Feeds</p>
                <p>Deals Store</p>
                <p>Privacy Policy</p>
                <p>Jobs</p>
            </div>
            <div className="links">
                <p className="linksTitle">Exclusives</p>
                <p>Hacking</p>
                <p>Development</p>
                <p>Android</p>
            </div>
            <div className="linksButton">
                <button className="linkButton">
                    <FontAwesomeIcon icon={faWifi} />
                    RSS Feeds
                </button> <br></br>
                <button className="linkButton">
                    <FontAwesomeIcon icon={faFileContract} />
                    Contact Us
                </button> <br></br>
                <button className="linkButton">
                    <FontAwesomeIcon icon={faTelegram} />
                    Telegram Channel
                </button>
            </div>
        </div>
    )
}