import React from 'react';

const VideoDetail = (props) => {
    // Before Component Mounts and there is no video, Video details returns: 
    if (!props.video) {
        return <div>Loading...</div>
    } 

    // creating VideoDetail component with API information only if its kind is Video
    if(props.video.id.kind === "youtube#video"){
        return (
            <div>
                <div className="ui embed">
                    <iframe src={`https://www.youtube.com/embed/${props.video.id.videoId}`} title="video player"/>
                </div>
                <div className="ui segment">
                    <h4 className = "ui header">{props.video.snippet.title}</h4>
                    <p>{props.video.snippet.description}</p>
                </div>
            </div>
        ); 
    } else {
        return (
        <div>
            <div className="ui segment">
                <h1 className = "videoClick">Click On A Video!</h1>
            </div>
        </div>
        )
    }
}

export default VideoDetail