import React from 'react'
import './TodoItems.css'
const TodoItems = (props) => {
    const { items, deleteItem } = props;
    let length = items.length;
    const ListItems = length ? (
        items.map(item => {
            return (
                <div className="items" key={item.id}>
                    <span className="taskNum">{item.id}</span>
                    <span className="taskName">{item.task}</span>
                    <span className="taskType">{item.type}</span>
                    <span className="delIcon" onClick={() => deleteItem(item.id)}>&times;</span>
                </div>
            )
        })
    ) : (
            <span className="noItem">No Items</span>
        )
    return (
        <div>
            <div className="titles">
                <span className="title num">ID</span>
                <span className="title firstSection">Task Name</span>
                <span className="title secSection">Type</span>
                <span className="title thirSection">Action</span>
            </div>
            <div className="content">
                {ListItems}
            </div>
        </div>
    )
}

export default TodoItems