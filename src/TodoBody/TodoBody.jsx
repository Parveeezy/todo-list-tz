import React from 'react';
import Todo from "./Todo/Todo";
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
        editTodo,
        changeFilter

    }
) => {
    const handlerCreator = (filter) => () => changeFilter(filter)
    return (
        <ul className={s.todoElements}>
            <div className={s.filterBtns}>
                <button className={s.filterBtn} onClick={handlerCreator('all')}>All</button>
                <button className={s.filterBtn} onClick={handlerCreator('active')}>Active</button>
                <button className={s.filterBtn} onClick={handlerCreator('completed')}>Completed</button>
            </div>
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