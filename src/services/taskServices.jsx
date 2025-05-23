export const getAllTasks = () => {
    return fetch(`http://localhost:8088/tasks`).then((res) => res.json())
}


export const getDifficulties = () => {
    return fetch (` http://localhost:8088/difficulties`).then((res) => res.json())
}

export const createTask = (task) => {
    return fetch(`http://localhost:8088/tasks`, {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    }).then(res => res.json())
}