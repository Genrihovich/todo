import React, { Component } from "react";
import './ItemStatusFilter.css';

export default class ItemStatusFilter extends Component {
    buttons = [
        { name: 'all', label: 'Всі' },
        { name: 'active', label: 'Активні' },
        { name: 'done', label: 'Завершені' },
    ];

    render() {
        const { filter, onFilterChange } = this.props;

        const buttons = this.buttons.map(({ name, label }) => {
            const isActive = filter === name;
            const clazz = isActive
                ? "btn btn-outline-info active"
                : "btn btn-outline-info"

            return (<button
                type="button"
                className={clazz}
                key={name}
                onClick={() => onFilterChange(name)}
            >{label}
            </button>)
        });


        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    };
};

