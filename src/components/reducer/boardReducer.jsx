export function boardReducer(boards = [], action) {

    if (action.type === "add") {
        return [
            ...boards,
            {
                id: action.id,
                title: action.title,
                tasks: action.task
   
            }   
        ]
    } else if (action.type === "edit") {
        return boards.map((board) => {
            if (board.id === action.board.id) {
                return action.board
            } else {
                return board
            }
        })
    } else if (action.type === "delete") {
        return boards.filter((board) => board.id !== action.id)
    } else {
        throw Error(`action ${action.type} not found`)
    }
}