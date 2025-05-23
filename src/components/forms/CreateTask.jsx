import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDifficulties } from "../../services/taskServices";



export const CreateTasks = ({ currentUser }) => {
    const [task, setTask] = useState({
        name:"",
        difficultyId: 0,
        isCompleted: false,

    });
    const [difficulty, setDifficulty] = useState([])

    const { taskId } = useParams()
    const navigate = useNavigate()

    useEffect (() => {
        getDifficulties().then((res) => setDifficulty(res))
    }, [])


    const handleSave  = {
        navigate
    }

    return (
        <div className="form-container">
            <div className="form-group">
                <input type="text"
                    className="form-control"
                    placeholder="To-do..."
                    onChange={(event) => {
                        const copy = { ...task }
                        copy.name = event.target.value
                        setTask(copy)
                    }}>

                </input>
                <div className="form-group">
                    <article className="dropdown">
                        <select
                            id="difficulty-selector"
                            name="difficulty"
                            defaultValue=""
                            onChange={(event) => {
                                const copy = { ...task }
                                copy.difficultyId = parseInt(event.target.value)
                                setTask(copy)
                            }}
                            required
                        >
                            <option disabled value="">Choose Difficulty</option>
                            {difficulty.map((difficulty) => (
                                <option value={difficulty.id} key={difficulty.id}>
                                    {difficulty.name}
                                </option>
                            ))}
                        </select>
                    </article>
                </div>
            </div>
            <div className="form-group">

            </div>
            <div className="save-btn">
                <button onClick={handleSave}>
                    Submit
                </button>
            </div>
        </div>
    )



}