import './App.css';
import {useEffect, useState} from "react";
import {v4} from "uuid";
import Input from "./Input/Input";
import TodoBody from "./TodoBody/TodoBody";

const App = () => {

    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])
    const [todoEditing, setTodoEditing] = useState(null)
    const [editingText, setEditingText] = useState('')

    useEffect(() => {
        const temp = window.localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)

        if (loadedTodos) {
            setTodos(loadedTodos)
        }
    }, [])
    useEffect(() => {
        const temp = JSON.stringify(todos)
        window.localStorage.setItem('todos', temp)
    }, [todos])

    const newTodo = {
        id: v4(),
        text: todo,
        isDone: false,
        editing: false
    }

    const addTodo = (e) => {
        e.preventDefault();
        if (todo !== '') {
            setTodos([...todos, newTodo])
            setTodo('')
        }
    }
    const onChangeHandler = (e) => {
        setTodo(e.currentTarget.value)
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
        if (todo.text !== '') {
            setTodos(updatedTodos)
            setTodoEditing(null)
            setEditingText('')
        }
    }

    return (
        <div className="App">
            <div>
                <Input todo={todo}
                       addTodo={addTodo}
                       onChangeHandler={onChangeHandler}
                />
                <TodoBody todos={todos}
                          removeTask={removeTask}
                          checkedHandler={checkedHandler}
                          todoEditing={todoEditing}
                          setTodoEditing={setTodoEditing}
                          editingText={editingText}
                          setEditingText={setEditingText}
                          editTodo={editTodo}
                />
            </div>
        </div>
    )

}

export default App;
