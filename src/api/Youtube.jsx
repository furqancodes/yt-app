import axios from 'axios'
 export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:25,
        key:'AIzaSyCwAdhAQHWyQFwMAjz3K_VvqQQSkMdgThQ',
    }
 })