import "./Home.css";
const checked = "/images/checked.svg";
const unchecked = "/images/unchecked.svg";
import { useState } from "react";
import { useEffect } from "react";
import { getAllTasks } from "../services/taskServices.jsx";

export const Tasks = ({ tasks, onCompleteTask }) => {
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    getAllTasks().then((data) => {
      setAllTasks(data);
    });
  }, []);

  return (
    <section className="section-container">
      <img className="background-img" src="/images/doodle.svg" alt="Example" />

      <div className="section-header">
        <h1 className="doodle">To-doodle-Do!</h1>
      </div>

      <div className="task-list">
        {allTasks.map((task) => (
          <div key={task.id} className="task-item">
            <img
              src={task.isComplete ? checked : unchecked}
              className="checkbox-icon"
              alt="checkbox"
            />
            <span className={task.isComplete ? "completed" : ""}>{task.title}</span>
            {!task.isComplete && <button onClick={() => onCompleteTask(task.id)}>Complete</button>}
          </div>
        ))}
      </div>
    </section>
  );
};
