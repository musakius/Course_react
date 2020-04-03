import React from 'react';
import s from "./AddTask.module.css";

function AddTask() {
    return (
        <div className={s["block_add_task"]}>
            <input type="text" placeholder="Add task"/>
            <button>Add</button>
        </div>
    )
}

export default AddTask;