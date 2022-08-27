import React, { Component } from "react";
import './ItemAddForm.css';

export default class ItemAddForm extends Component {
    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdd(this.state.label);
        //       this.setState({ label: '' });
    }
    render() {
        return (
            <form className="input-group mb-3 item-add-form"
                onSubmit={this.onSubmit}
            >
                <input
                    type="text"
                    className="form-control"
                    placeholder='Новий Todo ...'
                    onChange={this.onLabelChange}
                />
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary"
                    >
                        Додати
                    </button>
                </div>
            </form>
        )
    }
}