import React from 'react';
import s from './Input.module.css'

const Input = ({todo, addTodo, onChangeHandler}) => {
    return (
        <div >
            <div className={s.todoTitile}>
                <h1>Todo List</h1>
            </div>

            <form className={s.inputWrapper}>
                <input type="text"
                       onChange={onChangeHandler}
                       value={todo}
                       placeholder='Введите текст...'
                       className={s.input}
                />
                <button onClick={addTodo}
                        className={s.addBtn}
                >Add
                </button>
            </form>
        </div>
    );
};

export default Input;