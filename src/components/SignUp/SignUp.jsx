import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'


import "./SignUp.scss"

export const SignUp = () => {
    return (
        <div className="signUpContainer">
            <div className="signUpContainerContent">
                <h2>Cybersecurity Newsletter - Stay Informed</h2>
                <p>Sign up for cybersecurity newsletter and get latest news updates delivered straight to your inbox daily.</p>
                <div className="seacrhContainer">
                    <input type="email" placeholder="Enter your email address"></input>
                    <a href=""><FontAwesomeIcon icon={faArrowAltCircleRight} /></a>
                </div>
               
            </div>
        </div>
    )
}