import React from 'react';
import Todo from "../Todo/Todo";
import s from './TodoBody.module.css'

const TodoBody = (
    {
        todos,
        removeTask,
        checkedHandler,
        setTodoEditing,
        setEditingText,
        editingText,
        todoEditing,
        editTodo

    }
) => {

    return (
        <ul className={s.todoElements}>
            {todos.length ?
                todos.map(todo => {
                        return (
                            <li key={todo.id} className={s.todoElement}>
                                <Todo
                                    todo={todo}
                                    removeTask={removeTask}
                                    checkedHandler={checkedHandler}
                                    setTodoEditing={setTodoEditing}
                                    setEditingText={setEditingText}
                                    editingText={editingText}
                                    todoEditing={todoEditing}
                                    editTodo={editTodo}
                                />
                            </li>
                        )
                    }
                )
                :
                <p className={s.notFound}>Задачи не найдены...</p>
            }
        </ul>
    );
};

export default TodoBody;