import React, { useState, useEffect } from 'react'
import { getStories } from '../../services/api'
import { New } from './New'

import "./container.scss"

export const News = () => {

    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStories().then((ids) => setStoryIds(ids));
    }, []);
  
      

    return storyIds
        .slice(90, 100)
        .map((storyId, i) => <New key={i} storyId={storyId} />);
  

}

