import { PROFILE_IMAGE } from "../utlis.js/constant";

const commentsData = [
   
    {
        name : "Vishnu",
        text : "lorem ipsum",
        replies :[
             {
        name : "Vishnu",
        text : "lorem ipsum"
    },
     {
        name : "Vishnu",
        text : "lorem ipsum",
        replies :[ {
        name : "Vishnu",
        text : "lorem ipsum"
    }

        ]
    }
        ]
    },
    {
        name : "Vishnu",
        text : "lorem ipsum",
         replies :[
             {
        name : "Vishnu",
        text : "lorem ipsum"
    }]
    },
    {
        name : "Vishnu",
        text : "lorem ipsum",
         replies :[
             {
        name : "Vishnu",
        text : "lorem ipsum"
    }]
    }
]



const Comment = ({data}) =>{
    const {name , text , replies} = data;
    return <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
        <img alt="user" src={PROFILE_IMAGE} className="w-8 h-8"></img>
        <div className="px-3 ">
            <p className="font-bold">{name}</p>
            <p>{text}</p>
        </div>
    </div>
}



const CommentsList = ({comments}) =>{
    return comments.map((comment, index)=> (
    <div  key={index}>
    <Comment key={index} data={comment}></Comment>
    {comment.replies?.length > 0 &&(
    <div className="pl-5 border border-l-black ml-5">
    <CommentsList comments={comment.replies}/>
    </div> 
)}
    </div>   
)    
)
}

export const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
    <h1 className="text-2xl font-bold">Comments</h1>
    <CommentsList comments={commentsData}></CommentsList>
    </div>
    
  )
}

