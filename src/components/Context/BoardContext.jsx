import { createContext, useContext, useReducer } from "react"
import { boardReducer } from "../reducer/boardReducer"
import data_board from "../initialStates/boardDb";

const BoardContext = createContext(null)

export function BoardProvider({ children }) {
    const [boards, dispatch] = useReducer(boardReducer,data_board);
    
    return (
        <BoardContext.Provider value={{boards,dispatch}}>
            {children}
        </BoardContext.Provider>
    )

}

export function useBoard() {
    return useContext(BoardContext)
}
