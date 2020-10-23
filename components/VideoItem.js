import React from 'react';
import './VideoItems.css';

const VideoItem = (props) => {
    // video item component
    return(
        // on video item click, onVideoSelect call back function is envoked 
        <div onClick = {() => props.onVideoSelect(props.video)} className="video-item item">
            {/* adding video information from API */}
            <img className = "ui image" src = {props.video.snippet.thumbnails.medium.url} alt={`video`}/>
            <div className="content">
                {/* adding video information from API */}
                <div className="header"><p>{props.video.snippet.title}</p></div>
            </div>
        </div>
    )
};

export default VideoItem