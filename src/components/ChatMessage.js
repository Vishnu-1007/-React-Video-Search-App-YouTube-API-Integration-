
import { PROFILE_IMAGE } from '../utlis.js/constant'

export const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'><img className="h-8 bg-white" src={PROFILE_IMAGE} alt="user icon"></img>
    <span className='font-bold px-2'>{name}</span>
    <span>{message}</span>
    </div>
  )
}
