import React from 'react'
import './header.scss'
import fb from '../../img/fb.png'
import ig from '../../img/ig.png'
import tw from '../../img/tw.png'
import yt from '../../img/yt.png'

export const Header = () => {
    return (
        <div className='container'>
        
        <div className='social'>
            <ul>
                <li>Follow us</li>
                <li><img src={fb}/></li>
                <li><img src={ig}/></li>
                <li><img src={tw}/></li>
                <li><img src={yt}/></li>
            </ul>            
        </div>
        <div className="title">
            <p className="ptitle">The Hacker News </p>
            <div className="subscribe">
            <button className="subscribeButton">Subsctribe to Newsletter</button>
            </div>
        </div>
        </div>
    )
}
