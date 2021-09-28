import React from 'react'
import "./container.scss"
import { News } from './News'
import { PopularNews } from './PopularNews'

export const Content = () => {


    return (
        <div className="container">

            <div className="news">
                <News />
            </div>
            <div className="popular"> 
                <p className="popularTitle">Popular This Week</p>
                <PopularNews className="popularNews" />
            </div>
        </div>
    )

}