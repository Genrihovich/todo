import React from "react";
import './ItemStatusFilter.css';

const ItemStatusFilter = () => {
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
export default ItemStatusFilter;