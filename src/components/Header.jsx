import React from 'react'
import { SocialNetwork } from './Wrapper'

import fb from '../img/fb.png'
import ig from '../img/ig.png'
import tw from '../img/tw.png'
import yt from '../img/yt.png'

export const Header = () => {
    return (
        <>
            <SocialNetwork>
        <div>
            <p>Follow us</p>
            <img src={fb}/>
            <img src={ig}/>
            <img src={tw}/>
            <img src={yt}/>
        </div>
        </SocialNetwork>
        <div>
            <p>The Hacker News </p>
            <button>Substribe to Newsletter</button>
        </div>
        </>
    )
}
