import { useEffect, useState } from "react"
import { useNavigate, } from "react-router-dom"
import { createTask, getDifficulties } from "../../services/taskServices"

export const CreateTasks = ({ currentUser }) => {
  const [task, setTask] = useState({
    name: "",
    difficultyId: 0,
    isCompleted: false
  })
  const [difficulty, setDifficulty] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    getDifficulties().then(res => setDifficulty(res))
  }, [])

const handleCreate = event => {
  event.preventDefault()

  if (!task.name || !task.difficultyId) {
    alert("Please provide both task name and difficulty.")
    return
  }

  const newTask = {
    title: task.name,
    difficultyId: task.difficultyId, 
    isCompleted: false,
    dateCreated: new Date().toISOString()
  }

  createTask(newTask).then(() => navigate(`/`))
}

  const selectedDifficulty = difficulty.find(d => d.id === task.difficultyId)

  return (
    <div className="form-container">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="To-do..."
          onChange={event => {
            const copy = { ...task }
            copy.name = event.target.value
            setTask(copy)
          }}
        />
        <div className="form-group">
          <article className="dropdown">
            <select
              id="difficulty-selector"
              name="difficulty"
              defaultValue=""
              onChange={event => {
                const copy = { ...task }
                copy.difficultyId = parseInt(event.target.value)
                setTask(copy)
              }}
              required
            >
              <option disabled value="">Choose Difficulty</option>
              {difficulty.map(d => (
                <option value={d.id} key={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
          </article>
        </div>
      </div>
      <div className="form-group">
        {selectedDifficulty ? selectedDifficulty.points : ""}
      </div>
      <div className="save-btn">
        <button onClick={handleCreate}>
          Submit
        </button>
      </div>
    </div>
  )
}