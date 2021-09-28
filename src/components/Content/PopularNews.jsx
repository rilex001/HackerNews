import React, { useState, useEffect } from 'react'
import { getStories } from '../../services/api'
import { PopularNew } from './PopularNew'

import "./container.scss"

export const PopularNews = () => {

    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStories().then((ids) => setStoryIds(ids));
    }, []);
  
      

    return storyIds
        .slice(0, 6)
        .map((storyId, i) => <PopularNew key={i} storyId={storyId} />);
  

}
