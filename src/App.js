import React from "react";
import './App.css';

import TodoList from "./components/TodoList";
import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import ItemStatusFilter from "./components/ItemStatusFilter";

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
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter />
            </div>

            <TodoList todos={todoData}/>
        </div>
    )
};

export default App;
