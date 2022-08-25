import React from "react";

import TodoList from "./components/TodoList";
import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";

function App() {
    const todoData = [
        {
            label: 'Вивчання React',
            important: false,
            id: 0
        },
        {
            label: 'Написання React App',
            important: true,
            id: 1
        },
        {
            label: 'Перерва',
            important: false,
            id: 2
        }
    ]
    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList todos={todoData}/>
        </div>
    )
};

export default App;
