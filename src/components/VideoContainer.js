import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utlis.js/constant";
import VideoCard from "./VideoCards";
import { Link } from "react-router-dom";

const VideoContainer = () =>{

    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        getVideos();
    },[]);


    const getVideos = async () => {
        const data = await fetch (YOUTUBE_VIDEOS_API);
        const json = await data.json();
        console.log(json);
        setVideos(json.items)
    };

    return (
        <div className="flex flex-wrap">
            {videos.map(videos=>(<Link to={"/watch?v=" + videos.id}><VideoCard key={videos.id} info={videos}></VideoCard></Link>))}
        </div>
    )
}

export default VideoContainer;