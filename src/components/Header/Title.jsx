import React from 'react'
import "./header.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'


export const Title = () => {
    return (
        <>      
            <div className="title">
                <div className="content">
                <div className="name">The Hacker News</div>
                <button>
                    <FontAwesomeIcon icon={faEnvelope} />
                    Subscribe to Newsletter
                </button>
                </div>
            </div>    
        </>
    )
}