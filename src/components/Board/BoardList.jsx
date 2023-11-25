import { useBoard } from "../Context/BoardContext"
import TodoContainer from "../Todo/TodoContainer"

export default function BoardList() {
    const {boards ,dispatch }= useBoard()
    console.log({boards})
    return (
        <div className="mx-5 grid md:grid-cols-2 gap-3 ">
            {boards.map((board) => (
                <div key={board.id}>
                <div className="border border-[#deb887] rounded  p-4 bg-[#deb887] shadow-md my-2">
                    <TodoContainer
                        title={board.title}
                    />
                   <div className="flex justify-end ">
                    <button 
                        onClick={(e)=>{
                            e.preventDefault()
                            dispatch({
                                type: 'delete',
                                id:board.id,
                            })
                        }} 
                        className="px-2 py-1 bg-[peru] text-white rounded-sm capitalize"
                        >
                            delete
                        </button>
                   </div>
                
                </div>
                
                </div>
            ))}
        </div>
    )
}