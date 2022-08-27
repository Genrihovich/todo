import React from "react";
import './App.css';

import TodoList from "../TodoList/TodoList";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";

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

            <TodoList
                todos={todoData}
            onDeleted={(id)=> console.log(id)}
            />
        </div>
    )
};

export default App;
