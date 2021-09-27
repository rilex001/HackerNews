import React, {useEffect, useState} from 'react'
import { getStory } from '../../services/api'
import { mapTime } from '../../mappers/mapTime'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarWeek } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'
import image from "../../img/image.jpg"
import { PopulatNew } from './PopuarNew'

export const New = ({ storyId }) => {
    
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
        
   

        <div className="container">
            <div className="news">
                <div className="new">
                    <img src={image} />        
                    <div className="info">            
                    <a href={story.url} target="_blank">{story.title}</a>
                    <div className="flex">
                      <div className="flex">
                        <FontAwesomeIcon icon={faCalendarWeek} />
                        <p className="margin-left">{story.by}</p>
                      </div>
                      <div className="flex margin-left">
                        <FontAwesomeIcon icon={faNewspaper} />
                        <p className="margin-left">{mapTime(story.time)}</p>
                      </div>
                    </div>
                    </div>
                </div>
            </div>




            <div className="popular">        
              <PopulatNew />
            </div>

        </div>
    )

}



