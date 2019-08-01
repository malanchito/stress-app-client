import * as React from 'react'

export default function VideoPlayer(props) {
    if(!props.video){
        return 'Loading player'
    }
    const videoSrc = "https://www.youtube.com/embed/" + 
        props.video + "?autoplay=" + 
        props.autoplay + "&loop=" +
        props.loop + "&start=" +
        props.start+"&rel=" + 
        props.rel + "&modestbranding=" +
        props.modest;
    return <iframe title='youtube' className="player" type="text/html" width="400px" height="225px"
src={videoSrc}
frameBorder="0"/>
  
}