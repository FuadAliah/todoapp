import React, { Component } from 'react'
import './AddItem.css'

class AddItem extends Component {
    state = {
        task: '',
        type: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state)
        this.setState({
            task: '',
            type: '',
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="task" type="text" placeholder="Enter Task Name.." id="task" onChange={this.handleChange} value={this.state.task} required />
                    <input className="type" type="text" placeholder="Enter Task Type" id="type" onChange={this.handleChange} value={this.state.type} required />
                    <input className="btn" type="submit" value="Add" />
                </form>
            </div>
        )
    }
}

export default AddItem;