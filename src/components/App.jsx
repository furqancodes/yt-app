import React,{useState,useEffect} from 'react'
import SearchBar from './SearchBar'
import Youtube from '../api/Youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

const App=()=>{
    const [videoResults, setvideoResults] = useState([]);
    const [videoSelected, setvideoSelected] = useState(null);
    useEffect(() => {
        onSearchSubmit("buildings")
    }, []);
    const onSearchSubmit=async(term)=>{
        const response = await  Youtube.get('/search',{
                params:{
                    q:term
                }}
            )
        setvideoResults(response.data.items)
        setvideoSelected(response.data.items[0])
    }
    const onVideoSelect=(video) => {
        setvideoSelected(video)
    }
    return (
        <div className="ui container" style={{ marginTop: "10px" }}>
           <SearchBar onSearchSubmit={onSearchSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail result={videoSelected}/>
                    </div>
                    <div className="five wide column">
                        <VideoList onVideoSelect={onVideoSelect}results={videoResults}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default App
  