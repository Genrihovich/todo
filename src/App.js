import React from "react";

import TodoList from "./components/TodoList";
import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";

function App() {
    const todoData = [
        {
            label: 'Вивчання React',
            important: false
        },
        {
            label: 'Написання React App',
            important: true
        },
        {
            label: 'Перерва',
            important: false
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
