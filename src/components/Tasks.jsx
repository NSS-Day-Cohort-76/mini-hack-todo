import box-no from '../images/box-no.svg'
import checked from '../assets/checked.png'

const Tasks = ({ tasks, onCompleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <img
            src={task.isComplete ? checked : unchecked}
            alt="checkbox"
            className="checkbox-icon"
          />
          <span className={task.isComplete ? 'completed' : ''}>
            {task.title}
          </span>
          {!task.isComplete && (
            <button onClick={() => onCompleteTask(task.id)}>
              Complete
            </button>
          )}
        </div>
      ))}
    </div>
  )
}