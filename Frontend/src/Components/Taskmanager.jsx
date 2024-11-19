import React, { useState } from "react";
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
const Taskmanager = () => {
  const [isCompleted, setdone] = useState(false);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const handletask = async(e) => {
    e.preventDefault();
    try{
      const {data}=await axios.post("http://localhost:4000/settodo/send",
        {title,description,isCompleted},
      {
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true
      });
      toast.success(data.message);
      setdescription("");
      settitle("");
      setdone(false);
    }catch(error){
      console.log(error.response.data.message);
      toast.error(error.response.data.message,{"position":"top-center"})
    }
  };
  return (
    <div className="Task-Manager">
      <div className="createtodo">
        <h1 style={{ fontSize: "50px" }}>Create a Todo</h1>
      </div>
      <div className="Todoform">
        <form onSubmit={handletask}>
          <div>
            <input
              type="text"
              placeholder="Enter Title"
              required
              style={{ maxWidth: "200px" }}
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
            />
            <label>
              <input
                type="checkbox"
                checked={isCompleted}
                onChange={() => setdone(!isCompleted)}
              />
              {isCompleted ? "Completed" : "Not Completed"}
            </label>
          </div>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button type="submit" className="addtask">
              Add Task
            </button>
            <Toaster/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Taskmanager;
