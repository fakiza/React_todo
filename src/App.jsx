import React from 'react';
import TodoBoard from "./components/Board/Board";
import { BoardProvider } from "./components/Context/BoardContext";

const App = () => {
 return (
    <BoardProvider>
      <h1 className='text-center my-10 text-[peru] font-bold text-2xl'>Todo App</h1>
         <TodoBoard/>
    </BoardProvider>
 );
};

export default App;