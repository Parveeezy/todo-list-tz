import './App.css';
import {useEffect, useState} from "react";
import {v4} from "uuid";
import Input from "./Input/Input";
import TodoBody from "./TodoBody/TodoBody";

const App = () => {
    const [todos, setTodos] = useState([]) //Массив данных
    const [todoEditing, setTodoEditing] = useState(null)
    const [editingText, setEditingText] = useState('')
    const [filter, setFilter] = useState('all');
    const [error, setError] = useState(false)

    useEffect(() => {
        const temp = window.localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if (loadedTodos) {
            setTodos(loadedTodos)
        } else {
            setError(true)
            setTodos(loadedTodos)
        }
    }, [])
    useEffect(() => {
        const temp = JSON.stringify(todos)
        window.localStorage.setItem('todos', temp)
    }, [todos, setTodos])

    const addTodo = (title) => {
        const newTodo = {
            id: v4(),
            text: title,
            isDone: false,
            editing: false
        }
            setTodos([...todos, newTodo])
    }

    const removeTask = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const checkedHandler = (id) => {
        setTodos(todos.map(todo => todo.id === id ?
            {...todo, isDone: !todo.isDone} : todo))
    }
    const editTodo = (id) => {
        const updatedTodos = [...todos].map(todo => {
            if (todo.id === id) {
                todo.text = editingText
                todo.editing = !todo.editing
            }
            return todo
        })
        if (todos.text !== '') {
            setTodos(updatedTodos)
            setTodoEditing(null)
            setEditingText('')
        }
    }
    const changeFilter = (filter) => {
        setFilter(filter);
    }
    const getFilteredTasks = (todos, filter) => {
        let taskForTodoList = todos;
        switch (filter) {
            case "active":
                taskForTodoList = todos.filter(t => !t.isDone);
                break
            case "completed":
                taskForTodoList = todos.filter(t => t.isDone);
        }
        return taskForTodoList;
    }

    return (
        <div className="App">
            <div>
                <Input
                       addTodo={addTodo}
                       error={error}
                />

                <TodoBody todos={getFilteredTasks(todos, filter)}
                          removeTask={removeTask}
                          checkedHandler={checkedHandler}
                          todoEditing={todoEditing}
                          setTodoEditing={setTodoEditing}
                          editingText={editingText}
                          setEditingText={setEditingText}
                          editTodo={editTodo}
                          changeFilter={changeFilter}
                />
            </div>
        </div>
    )

}

export default App;
