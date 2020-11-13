import React from 'react';
import Videoitem from "./Videoitem";

const VideoList = ({results,onVideoSelect})=>{
    
    return(
    <div className="ui relaxed divided list">
        {results.map((result)=>{
        return <Videoitem onVideoSelect={onVideoSelect} item={result} key={result.id.videoId} />
    })}
    </div>
    )

}
 export default VideoList