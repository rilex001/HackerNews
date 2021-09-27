import React, { useState, useEffect } from 'react'
import image from "../../img/image.jpg"
import { getStory } from '../../services/api'

export const PopulatNew = ({ storyId }) => {

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
            <div className="content">
                <img src={image} />
                <div>story.title</div>
            </div>
        </>
    )


}