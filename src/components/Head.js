import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utlis.js/appSlice";
import { useEffect, useState } from "react";
import { PROFILE_IMAGE, YOUTUBE_SEARCH_API } from "../utlis.js/constant";
import { cacheResults } from "../utlis.js/serachSlice";

const Head = () =>{
    const [seacrhQuery, setSearchQuery] = useState();
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false); 
    const searchCache = useSelector((store)=> store.search);
    const dispatch = useDispatch();

    

    useEffect(()=>{
      const timer =  setTimeout(() =>{
        
        if(searchCache[seacrhQuery]) {
            setSuggestions(searchCache[seacrhQuery]);
        }
        else{
            getSearchSuggestions()

        }


      },200);
      
      return () =>{
        clearTimeout(timer);
      }

    },[seacrhQuery])


    const getSearchSuggestions = async () =>{
        const data = await fetch(YOUTUBE_SEARCH_API+ seacrhQuery);
        const json = await data.json();
        console.log(json[1]);
        setSuggestions(json[1]);

        dispatch(cacheResults({
            [seacrhQuery] : json[1]
        }));
    }

    //const dispatch = useDispatch()

    const toggleMenuHandler = () =>{
        dispatch(toggleMenu())
    }


    return(
        <div className="grid grid-flow-col p-5 m-2 shadow-lg">
            <div className="flex col-span-1">
            <img onClick={()=>toggleMenuHandler()} className= "h-8 cursor-pointer" src="data:image/png;base64,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" alt="menu"></img>
            <a href="/">
            <img className="h-8 mx-2" src="data:image/jpeg;base64,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" alt="youtube-logo"></img>
            </a>
            </div>
            <div  className="col-span-10 px-10">
                <div>
                <input value = {seacrhQuery} onChange={(e)=> setSearchQuery(e.target.value)} onFocus={()=>setShowSuggestions(true)} onBlur={()=> setShowSuggestions(false)} className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full" type="text"></input>
                <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">🔍</button>

                </div>
                {showSuggestions &&(<div className="fixed bg-white py-2 px-2 w-[35rem] shadow-lg rounded-lg border border-gray-100">
                    <ul>
                        {suggestions.map((s)=> (<li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">🔍 {s}</li>))}
                        
                    </ul>
                </div>)}
            </div>
            <div>
                <img className="h-8 col-span-1" src={PROFILE_IMAGE} alt="user icon"></img>

            </div>
        </div>
    )
}

export default Head;