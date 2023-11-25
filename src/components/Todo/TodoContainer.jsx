import { TodoProvider } from "../Context/TodoContext"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"

export default function TodoContainer({ title }) {

    return (
        <TodoProvider>
            <div className="">

                <h1 className="text-lg uppercase font-bold text-center text-[dimgray] pb-3">{title}</h1>
                <AddTodo/>
                <>
                <TodoList/>
                </>
                
            </div>
            </TodoProvider>
    )
}