export function TodoReducer(tasks, action) {
    if (action.type === "add") {
        return [
            ...tasks,
            {
                id: action.id,
                description: action.description,
                completed: action.completed,
            }
        ]
    } else if (action.type === "edit") {
        return tasks.map((task) => {
            if (task.id === action.task.id) {
                return action.task
            } else {
                return task
            }
        })
    } else if (action.type === "delete") {
        return tasks.filter((task) => task.id !== action.id)
    } else {
        throw Error(`action of type ${action.type} is invalid`)
    }
}