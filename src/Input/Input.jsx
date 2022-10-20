import React, {useState} from 'react';
import s from './Input.module.css'

const Input = ({addTodo}) => {

    let [title, setTitle] = useState(''); // Данные инпута
    const [error, setError] = useState(false) // Данные ошибки


    const addTaskHandler = (e) => {
        e.preventDefault();
        const trimmedTitle = title.trim() // Удаление всех пробелов
        if (trimmedTitle !== '') {
            addTodo(trimmedTitle) // Вызов callback функции addTodo для добавления задачи
        } else {
            setError(true) // Если поле ввода пусто задаем ошибку для дальнейшего её вывода
        }
        setTitle('') // Очистка инпута
    }

    const onChangeHandler = (e) => {
        error && setError(false) // Если введены данные убираем ошибку
        setTitle(e.currentTarget.value) // Передаем текущие данные инпута
    }

    const errorMessage = error ? // Если есть ошибка выводим информацию о том что инпут не может быть пустым
        <div className={s.error}>Поле ввода не может быть пустым...</div> : null

    return (
        <div>
            <div className={s.todoTitile}>
                <h1>Todo List</h1>
            </div>
            <form className={s.inputWrapper}>
                <input type="text"
                       onChange={onChangeHandler}
                       value={title}
                       placeholder='Введите текст...'
                       className={error ? `${s.input} ${s.inputError}` : s.input }
                />
                <button onClick={addTaskHandler}
                        className={s.addBtn}
                >Add
                </button>
            </form>
            {errorMessage}
        </div>
    );
};

export default Input;