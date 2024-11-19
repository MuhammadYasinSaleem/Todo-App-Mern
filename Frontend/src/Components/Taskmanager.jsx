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
      // Refetch todos after adding
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
      console.log(data); // Debugging response
      settodos(data); // Set todos from response
    } catch (error) {
      toast.error(error.response?.data?.message || "Error fetching todos");
      console.log(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    fetchtodos();
  }, []);

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
              <button className="del">Delete</button>
              <button className="update">Update</button>
              </div>
            </div>
          ))
        ) : (
          <p style={{fontSize:"20px"}}>No tasks available.</p>
        )}
        <Toaster />
      </div>
    </div>
  );
};

export default TaskManager;
