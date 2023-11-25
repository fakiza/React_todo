
import { useTodo } from "../Context/TodoContext"
import Todo from "./Todo"
export default function TodoList() {
    const {tasks} = useTodo()
    return (
        <ul className="bg-[#fffacd] ">
            {tasks.map(task => (
                <Todo
                    task={task}
                    key={task.id}
                
                />
            ))}
        </ul>
    )
}