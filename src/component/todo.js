import React from 'react';


const Todo = ({ todo }) => {
    const { id, title, completed }  = todo;
    const h1 = <h1>{title}</h1>
    const text = completed ? <strike>{h1}</strike> : h1
    return (
        <h1 data-testid="todo-1">{text}</h1>
    );
};


export default Todo;