import React,{useState} from "react";

const Taskmanager=()=>{
    const handletask=()=>{

    }
    return(
        <div className="Task-Manager">
            <div className="createtodo">
                <h1 style={{fontSize:"50px"}}>Create a Todo</h1>
            </div>
            <div>
                <form onSubmit={handletask}>
                <div>
                    <input type="text" placeholder="Enter Title"/>
                    <textarea rows={10} cols={20}/>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Taskmanager