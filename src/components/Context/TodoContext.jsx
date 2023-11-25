import { createContext, useContext, useReducer } from "react"
import { TodoReducer } from "../reducer/TodoReducer";
import data_todo from "../initialStates/TodoDb.jsx";

const TodoContext = createContext(null)

export function TodoProvider({ children }) {
    const [tasks, dispatch] = useReducer(TodoReducer, data_todo);


    return (
        <TodoContext.Provider value={{tasks,dispatch}}>
                {children}
        </TodoContext.Provider>
    )
}


export function useTodo() {
    return useContext(TodoContext)
}
