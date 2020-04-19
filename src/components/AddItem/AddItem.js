import React, { Component } from 'react'
import './AddItem.css'

class AddItem extends Component {
    state = {
        task: '',
        type: '',
        taskMsg: '',
        typeMsg: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const taskLength = this.state.task.length;
        const typeLength = this.state.type.length;
        if (!taskLength) {
            this.setState({
                taskMsg: 'Enter valid Task Name'
            })
            return false
        } else if (!typeLength) {
            this.setState({
                typeMsg: 'Enter Type Name'
            })
            return false
        } else {
            this.props.addItem(this.state)
            this.setState({
                task: '',
                type: '',
                taskMsg: '',
                typeMsg: ''
            })
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className="task" type="text" placeholder="Enter Task Name.." id="task" onChange={this.handleChange} value={this.state.task} />
                    <input className="type" type="text" placeholder="Enter Task Type" id="type" onChange={this.handleChange} value={this.state.type} />
                    <input className="btn" type="submit" value="Add" />
                </form>
                <span className="warning task">{this.state.taskMsg}</span>
                <span className="warning type">{this.state.typeMsg}</span>
            </div>
        )
    }
}

export default AddItem;