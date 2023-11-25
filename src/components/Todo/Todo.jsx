import { useState } from "react"
import { useTodo } from "../Context/TodoContext";

export default function Todo({ task }) {
    const [edit, setEdit] = useState(false)
    const {dispatch} = useTodo()
    function handleEdittodo() {
        setEdit(!edit)
    }

    let content;

    if (edit) {
        content = (
            <form onSubmit={handleEdittodo} id="from_edit" className="flex">
                <div className="">
                <label htmlFor="">
                    <input
                       type="text"
                       form="from_edit"
                       className="px-2 py-1 border border-[dimgrey]  focus:outline-none ml-1  rounded-l-sm text-sm"
                        value={task.description}
                        onChange={(e) => dispatch({
                            type: "edit",
                            task: {
                                ...task,
                                id:task.id,
                                description: e.target.value
                            }
                        })}
                    />
                </label>
                
                <button className="border px-2 py-1  border-[dimgrey] bg-[dimgrey] text-white capitalize rounded-r-sm text-sm">add</button>
                </div>
            </form>
        )
    } else {
        content = (
            <div className="flex ">
               {task.completed
                ?( <div className="line-through text-[red] mx-3">{task.description}</div>)
                :( <div className=" mx-3">{task.description}</div>)
               }
                <div className="space-x-2" >
                    <button onClick={() => setEdit(true)} className="text-xs px-1  border border-[dimgrey] bg-[dimgrey] text-white rounded-sm capitalize">edit</button>
                    <button onClick={() => dispatch({
                        type: "delete",
                        id: task.id
                    })} className="text-xs px-1 border border-[dimgrey] bg-[dimgrey] text-white rounded-sm capitalize">delete</button>
                </div >
            </div>
        )
    }

    return (

        <li className="my-2">
        
                <>
                    <div className="flex p-2 pt-0 first-of-type:pt-2 ">
                        <input
                            type="checkbox"
                            value={task.completed}
                            onChange={(e) => dispatch({
                                type: "edit",
                                task: {
                                    ...task,
                                    completed: e.target.checked
                                }
                            })}
                        />
                        {content}
                    </div>
                </>
            

        </li >
    )


}

