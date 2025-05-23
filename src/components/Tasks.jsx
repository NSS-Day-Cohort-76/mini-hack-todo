import "./Home.css"
import { useState, useEffect } from "react"
import box-no from 

export const Tasks = ({ tasks, onCompleteTask }) => {

  const [tasks, setTasks] = useState();
  const [onCompleteTask, setOnCompleteTask] = useState()

    return ( 
    <section className="section-container">
      <img className="background-img" src="/images/doodle.svg" alt="Example" />
      <div className="section-header">
        <h1 className="doodle">To-doodle-Do!</h1>
      </div>
      <div className="task-list">
       {tasks?.map((task) => (
        <div key={task.id} className="task-item">
          <img src={task.isComplete ? checked : unchecked}
          className="checkbox-icon"
          />
          <span className={task.isComplete ? "completed" : ""}>{task.name}
          </span>
          {!task.isComplete && (
            <button onClick={() => onCompleteTask(task.id)}>Complete</button>
          )}
      </div>
       ))}
       </div> 
       </section>
      )}
      



