import React, { useState } from "react";

const Taskmanager = () => {
  const [done, setdone] = useState(false);
  const handletask = () => {};
  return (
    <div className="Task-Manager">
      <div className="createtodo">
        <h1 style={{ fontSize: "50px" }}>Create a Todo</h1>
      </div>
      <div className="Todoform">
        <form onSubmit={handletask}>
          <div>
            <input type="text" placeholder="Enter Title" required style={{maxWidth:"200px"}} />
            <input type="text" placeholder="Enter Description" />
            <label>
              <input
                type="checkbox"
                checked={done}
                onChange={() => setdone(!done)}
              />
              {done ? "Completed" : "Not Completed"}
            </label>
          </div>
          <div style={{textAlign:"center",marginTop:"20px"}}>
          <button type="submit" className="addtask">Add Task</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Taskmanager;
