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
            <img src={fb}/>
            <img src={ig}/>
            <img src={tw}/>
            <img src={yt}/>
            <span className="follow">Follow us</span>
        </div>
        <div className="title">
            <div className="content">
            <p>The Hacker News </p>
            <button>Substribe to Newsletter</button>
            </div>
        </div>
        </div>
    )
}
