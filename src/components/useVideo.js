import {useState,useEffect} from 'react';
import Youtube from '../api/Youtube'


const useVideo=(defaultTerm)=>{
    console.log(defaultTerm)
    const [videoResults, setvideoResults] = useState([]);
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
    }
return([videoResults,onSearchSubmit])
}

export default useVideo