import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
  return (
    <div className="container my-3" style={cool}>
      <h3>Todos List</h3>
      {props.todos.length === 0 ? "No todos in list" :
        props.todos.map((todo) => {
          return <Todo todo={todo} onDelete={props.onDelete} key={todo.no} />
        })}
    </div>
  )
}
const cool = {
  minHeight: '70vh'
}

export default Todos

