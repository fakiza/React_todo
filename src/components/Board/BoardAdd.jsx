import { useState } from "react"
import { useBoard } from "../Context/BoardContext"
import data_board from "../initialStates/boardDb"

export default function BoardAdd() {
    const {dispatch} = useBoard()
    const [index, setIndex] = useState(data_board.length)
    const [title, setTitle] = useState('')
   
    function handleOnSubmit(e) {
        e.preventDefault()
        dispatch({
            type: "add",
            id: index,
            title: title,
            tasks: []
        })
        setTitle('')
        setIndex(index + 1)
    }
    return (
        <div className="flex justify-center my-10">
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="">
                    <input
                        type="text"
                        value={title}
                        placeholder="Title"
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="px-4 py-1 border border-[dimgrey] focus:outline-none shadow-md rounded-l-sm"
                    />
                </label>
                <button type="submit" className="px-4 py-1  bg-[peru] border border-[dimgrey] text-white capitalize shadow-md rounded-r-sm">add</button>
                
                  
            </form>
        </div>
    )
}