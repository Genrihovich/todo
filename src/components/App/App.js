import React, {Component} from "react";
import './App.css';

import TodoList from "../TodoList/TodoList";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import ItemAddForm from "../ItemAddForm/ItemAddForm";

export default class App extends Component {
    maxID = 100;
    state = {
        todoData: [
            {label: 'Вивчання React', important: false, id: 0},
            {label: 'Написання React App', important: true, id: 1},
            {label: 'Перерва', important: false, id: 2}
        ]
    }

    onDeleteItem = (id) => {
        const newTodoData = this.state.todoData.filter(item => item.id !== id);
        this.setState({
            todoData: newTodoData
        });
    }

    addItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: this.maxID++
        }
        this.setState(({todoData}) => {
            const newArr = [
                ...todoData,
                newItem
            ];
            return {todoData: newArr}
        })
    }

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.onDeleteItem}
                />
                <ItemAddForm
                    onItemAdd={this.addItem}
                />
            </div>
        )
    }
}

