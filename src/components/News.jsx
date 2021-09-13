import React, { useState, useEffect } from 'react'
import { New } from './New'
import { getStories } from '../services/api'

export const News = () => {
    const [storyIds, setStoryIds] = useState([]);
  
    useEffect(() => {
      getStories().then((ids) => setStoryIds(ids));
    }, []);

    
  
    return storyIds
      .slice(0, 100)
      .map((storyId, i) => <New key={i} storyId={storyId} />);
}
// https://github.com/HackerNews/API