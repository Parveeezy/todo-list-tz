import React from 'react';
import s from './Todo.module.css'

const Todo = (
    {
        checkedHandler,
        todo,
        removeTask,
        setTodoEditing,
        setEditingText,
        editingText,
        todoEditing,
        editTodo
    }
) => {

    const comp = {
        textDecoration: 'line-through',
        fontsize: '30px'
    }

    const textInputOn = {
        display: 'inline'
    }
    const textInputOff = {
        display: 'none'
    }

    return (
        <>
            {todoEditing === todo.id ?
                (<input type="text"
                        onChange={(e) => setEditingText(e.currentTarget.value)}
                        style={!todo.editing ? textInputOn : textInputOff}
                        value={editingText}
                        className={s.editInput}
                        placeholder={'Измените задачу...'}
                />)
                :
                (<span>{todo.task}</span>)}

            <input type="checkbox"
                   onChange={() => checkedHandler(todo.id)}
                   value={todo.isDone}
                   checked={todo.isDone}
            />
            <span className={s.todoTitle} style={todo.isDone ? comp : {}}>
                {todo.text}
            </span>
            {todoEditing === todo.id ?
                (<button className={s.submitBtn} onClick={() => editTodo(todo.id)}>Submit Edit</button>)
                :
                (<button className={s.editBtn} onClick={() => setTodoEditing(todo.id)}>Edit</button>)}

            <button className={s.removeBtn} onClick={() => removeTask(todo.id)}>x</button>
        </>
    );
};
export default Todo;