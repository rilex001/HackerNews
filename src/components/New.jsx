import React, {useEffect, useState} from 'react'
import { getStory } from '../services/api'

export const New = ({ storyId }) => {
    
    const [story, setStory] = useState({})

    useEffect(() => {
        getStory(storyId).then((data) => {
            console.log(data)
          if (data && data.url) {
            setStory(data);
          }
        });
      }, []);
      

      return (
          <>
          <div>{story.title}</div>
          <div>{story.score}</div>
          <div>{story.by}</div>
          </>
      )

}