import React from 'react'
import "./header.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'


export const NavBar = () => {
    return (
        <>
            <div className="navbar">
                <ul className='navigation'>
                    <li>Home</li>
                    <li>Cyber Attack</li>
                    <li>Vulnerabilities</li>
                    <li>Offers</li>
                    <li>Contact</li>
                    <li><FontAwesomeIcon icon={faSearch} /></li>
                    <li><FontAwesomeIcon icon={faBars} /></li>
                </ul>
            </div>
            <hr></hr>       
        </>
    )
}