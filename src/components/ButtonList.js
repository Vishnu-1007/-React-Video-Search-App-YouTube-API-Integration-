import Button from "./Button";


const list = ["All", "Songs", "Gaming", "Movies", "Cricket", "Soccer"];

const ButtonList = () =>{
    return(
     <div className="flex">
        {list.map((list) => (<Button key={list} name={list}></Button>))}
     </div>
    )
}


export default ButtonList;