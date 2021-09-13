import React from 'react'
import Wrapper from './Wrapper'

import fb from '../img/fb.png'
import ig from '../img/ig.png'
import tw from '../img/tw.png'
import yt from '../img/yt.png'

export const Header = () => {
    return (
        <Wrapper>
        <div>
            <p>Follow us</p>
            <img src={fb}/>
            <img src={ig}/>
            <img src={tw}/>
            <img src={yt}/>
        </div>
        <div>
            <p>The Hacker News </p>
            <button>Substribe to Newsletter</button>
        </div>
        </Wrapper>
    )
}
