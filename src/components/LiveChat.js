import React, { useEffect, useState } from 'react'
import { ChatMessage } from './ChatMessage'
import { addMessage } from '../utlis.js/chatSlice';
import { useDispatch, useSelector } from 'react-redux';
import { generateRandomName, makeid } from '../utlis.js/helper';



export const LiveChat = () => {
    const [liveMessages, setLiveMessages] = useState("")
  const dispatch = useDispatch();
  const chatMessages = useSelector((store)=>store.chat.messages)


  useEffect(()=>{
    const i = setInterval(()=>{
      console.log("API Polling")
      dispatch(addMessage({
        name :generateRandomName(),
        message : makeid(20)
      }))

    },2000);
    return () => clearInterval(i);
  }, [])
  return (
    <>
    <div className="w-full h-[400px] ml-2 p-2 border border-black bg-slate-50 rounded-lg overflow-y-scroll flex flex-col-reverse">
      <div>
    {chatMessages.map((c,i)=><ChatMessage key={i} name={c.name} message={c.message}></ChatMessage>)}
    </div>
    </div>
    <form className="w-full p-2 ml-2 border  border-black" onSubmit={(e)=>
      {
        e.preventDefault();
        dispatch(addMessage({
          name :"Vishnu",
          message: liveMessages
        }))
        setLiveMessages("")
      }
    }>
      <input className="px-2 w-96" type="text" value={liveMessages} onChange={(e)=>{
        setLiveMessages(e.target.value)
      }}></input>
      <button className='px-2 mx-2 bg-green-100'>Send</button>

    </form>
    </>
  )
}
