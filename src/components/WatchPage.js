import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { closeMenu } from "../utlis.js/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import { CommentsContainer } from "./CommentsContainer";
import { LiveChat } from "./LiveChat";

const WatchPage = () => {
    
    const [searchParams] = useSearchParams();

    console.log(searchParams.get("v"));

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(closeMenu())
    },[])
  return (
    <div className="flex flex-col w-full">
    <div className="px-5 flex">
      <div>
      <div>
        <iframe width="800" height="400"  src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe></div>
        </div>
        <div className="w-full">
          <LiveChat></LiveChat>
        </div>
        </div>
        <CommentsContainer></CommentsContainer>
        </div>
  )
}

export default WatchPage