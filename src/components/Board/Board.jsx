import BoardAdd from "./BoardAdd";
import BoardList from "./BoardList";

export default function TodoBoard() {
    return (
     
            <div className="container mx-auto">
                <BoardAdd/>
                <BoardList/>
            </div>
        

    )
}