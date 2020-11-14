import React,{useState,useEffect} from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideo from './useVideo'

const App=()=>{
    const [videoSelected, setvideoSelected] = useState(null);
    const[videoResults,onSearchSubmit]=useVideo("help")
    useEffect(() => {
        setvideoSelected(videoResults[0])
    }, [videoResults]);
    
    return (
        <div className="ui container" style={{ marginTop: "10px" }}>
           <SearchBar onSearchSubmit={onSearchSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail result={videoSelected}/>
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={(video) => {setvideoSelected(video)}} results={videoResults}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

 
export default App
  