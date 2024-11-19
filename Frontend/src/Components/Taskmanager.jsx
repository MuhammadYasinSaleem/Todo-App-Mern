import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const TaskManager = () => {
  const [isCompleted, setdone] = useState(false);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [todos, settodos] = useState([]);

  // Add Todo
  const handletask = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/settodo/send",
        { title, description, isCompleted },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setdescription("");
      settitle("");
      setdone(false);
      fetchtodos();
    } catch (error) {
      console.log(error.response?.data?.message || "Error occurred");
      toast.error(error.response?.data?.message || "An error occurred", {
        position: "top-center",
      });
    }
  };

  // Fetch Todos
  const fetchtodos = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/");
      settodos(data); // Set todos from response
    } catch (error) {
      toast.error(error.response?.data?.message || "Error fetching todos");
      console.log(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    fetchtodos();
  }, []);

  const handledel=async(id)=>{
    try{
      const {data}=await axios.delete(`http://localhost:4000/todo/${id}`)
      toast.success(data.message || "Todo deleted successfully");
      fetchtodos()
    }catch(error){
      toast.error(error.response?.data?.message || "An error occurred");
    }
    
  }

  const handleupdate=async(id)=>{
    const todotoupdate=todos.find((todo)=>todo._id===id)
    const updatetitle=prompt("Update title",todotoupdate.title)
    const updatedescription=prompt("Update Description",todotoupdate.description)
    const updateiscompleted=confirm("Mark as Completed? Ok for Yes Cancel for No")
    if(updatetitle===null)
    {
      toast.error("Update cancelled")
      return;
    }
    try{
      const {data}=await axios.put(`http://localhost:4000/todo/${id}`,{
        title:updatetitle,
        description:updatedescription,
        isCompleted:updateiscompleted
      })
      toast.success(data.message)
        fetchtodos()
    }catch(error){
        toast.error(error.response.data.message)
    }
  }
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
            <Toaster />
          </div>
        </form>
      </div>

      <div className="getdata">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <div key={todo._id} className="todo">
              <p className="title">{todo.title}</p>
              <p className="description">{todo.description? todo.description:"No description available"}</p>
              <p className="done">{todo.isCompleted ? "Yes" : "No"}</p>
              <div className="btn">
              <button className="del" onClick={()=>handledel(todo._id)}>Delete</button>
              <button className="update" onClick={()=>handleupdate(todo._id)}>Update</button>
              </div>
            </div>
          ))
        ) : (
          <p style={{fontSize:"20px",textAlign:"center",color:"red"}}>No tasks available.</p>
        )}
        <Toaster />
      </div>
    </div>
  );
};

export default TaskManager;
