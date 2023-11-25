import { useState } from "react"
import { useTodo } from "../Context/TodoContext"
import data_todo from "../initialStates/TodoDb.jsx"

// eslint-disable-next-line 
export default function AddTodo() {
    const { dispatch }= useTodo()
    const [description, setDescription] = useState('')
    const [index, setIndex] = useState(data_todo.length)
    

    function handleOnSubmit(e) {
        e.preventDefault()
        if (description != "") {
            dispatch({
                type: "add",
                id: index,
                description: description,
                completed: false,
            })
            setDescription("")
            setIndex(index + 1)
        }
    }

    return (
        <div className="text-center">
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="description">
                    <input
                        type="text"
                        name="description"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="px-4 py-1 border border-[dimgrey] focus:outline-none  bg-transparent rounded-l-sm" 
                    />
                </label>
                <button className="px-2 py-1  bg-[dimgrey] border border-[dimgrey] text-white capitalize shadow-md  rounded-r-sm">add</button>
            </form>
        </div>
    )
}