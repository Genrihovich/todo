import React, {Component} from "react";
import './ItemAddForm.css';

export default class ItemAddForm extends Component {
    render() {
        return (
            <div className="input-group mb-3 item-add-form">
                <input
                    type="text"
                    className="form-control"
                    placeholder='Новий Todo ...'
                    onChange={(event) => console.log(event.target.value)}
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary"
                        onClick={() => this.props.onItemAdd('tteexxtt')}>
                        Додати
                    </button>
                </div>
            </div>
        )
    }
}