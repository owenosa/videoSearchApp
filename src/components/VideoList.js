import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    // Mapping through returned API Data through a prop, making individual
    // Video Items with properties from API. Video Items are stored to 
    // rendered list. 
    const renderedList = props.videos.map(video => {
        if(video.id.kind === "youtube#video"){
            return <VideoItem key ={video.id.videoId} onVideoSelect = 
            {props.onVideoSelect} video={video} />;
        }
    });
    
    return (
        // Rendered List is Returned from VideoList
        <div className="ui releaxed divided list">
            {renderedList}
        </div>
    )
}

export default VideoList