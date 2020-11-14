import React from 'react';

const VideoDetail=({result})=>{
    if (!result){
        return <div ></div> 
    }
    const vidsrc=`https://www.youtube.com/embed/${result.id.videoId}`;
    return(
        <div style={{color:"whitesmoke",backgroundColor:"#121212"}} className="ui segment">
            <div className="ui embed">
                <iframe src={vidsrc} frameBorder="0" title="video"></iframe>
            </div>
            <h3 style={{borderBottom:"1px solid whitesmoke"}}>{result.snippet.title}</h3>
            <h4>{result.snippet.description}</h4>
        </div>
    )
}
export default VideoDetail;