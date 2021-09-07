import React, {useEffect} from 'react'


export default  function News() {

    useEffect(() => {
        fetch("https://hacker-news.firebaseio.com/v0/item/28437914.json?print=pretty")
            .then(result => result.json())
            .then(res => console.log(res))
        return () => {
            
        }
    }, [])

    return (
        <div>Jebi se </div>
    )

}


// https://github.com/HackerNews/API