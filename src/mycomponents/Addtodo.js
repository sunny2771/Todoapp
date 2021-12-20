//** Using useState Hook Here for title and desc **
import React, { useState } from 'react';

const Addtodo = ({ addTodo }) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submit = (e) => {
        e.preventDefault()
        if (title === '' || desc === '') {
            alert('Please Enter All The Fields.')
        }
        else {
            addTodo(title, desc)
        }
    }

    const thatChange = (e) => {
        setTitle(e.target.value)
    }
    const thisChange = (e) => {
        setDesc(e.target.value)
    }

    return (
        <div className='container my-3' >
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label for="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={thatChange} className="form-control" id="title" />
                </div>

                <div className="mb-3">
                    <label for="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={thisChange} className="form-control" id="desc" />
                </div>

                <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
            </form>
        </div>
    )
}

export default Addtodo


