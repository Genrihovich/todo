import React, {Component} from "react";
import './ItemStatusFilter.css';

export default class ItemStatusFilter extends Component {
    render() {
        return (
            <div className="btn-group">
                <button
                    type="button"
                    className="btn btn-outline-info active"
                >Всі
                </button>
                <button
                    type="button"
                    className="btn btn-outline-info"
                >Активні
                </button>
                <button
                    type="button"
                    className="btn btn-outline-info"
                >Завершені
                </button>
            </div>
        )
    }
};

