import React from "react";
import './AppHeader.css';

const AppHeader = ({ toDo, done }) => {
    return <div className="app-header d-flex">
        <h1>Todo List</h1>
        <h2>{toDo} Активні, {done} Виконано</h2>
    </div>
}
export default AppHeader;