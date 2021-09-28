import React, { useState, useEffect } from 'react'
import image from "../../img/image.jpg"
import { getStory } from '../../services/api'
import "./container.scss"

export const PopularNew = ({ storyId }) => {

    const [story, setStory] = useState({})

    useEffect(() => {
        getStory(storyId).then((data) => {
            // console.log(data)
          if (data && data.url) {
            setStory(data);
          }
        });
      }, []);

    return (
        <>
            <div className="popularNews">
                <img src={image} className="popularImg" />
                <div className="margin-left">                    
                  <a href={story.url} target="_blank">{story.title}</a>
                </div>
            </div>
        </>
    )


}