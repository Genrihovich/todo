import React, { Component } from "react";
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
            this.createTodoItem('Вивчання React'),
            this.createTodoItem('Написання React App'),
            this.createTodoItem('Перерва')
        ]
    }

    createTodoItem(label) {
        return {
            label,
            done: false,
            important: false,
            id: this.maxID++
        }
    }

    onDeleteItem = (id) => {
        const newTodoData = this.state.todoData.filter(item => item.id !== id);
        this.setState({
            todoData: newTodoData
        });
    }

    addItem = (text) => {
        this.setState(({ todoData }) => {
            const newArr = [
                ...todoData,
                this.createTodoItem(text)
            ];
            return { todoData: newArr }
        })
    }

    toggleProp(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        };

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ]
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProp(todoData, id, 'done')
            }
        })
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProp(todoData, id, 'important')
            }
        })
    }

    render() {
        const { todoData } = this.state;
        //кількість виконаних завдань
        const doneCount = todoData.filter((el) => el.done).length;
        //кількість важливих завдань
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todos={todoData}
                    onDeleted={this.onDeleteItem}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}
                />
                <ItemAddForm
                    onItemAdd={this.addItem}
                />
            </div>
        )
    }
}