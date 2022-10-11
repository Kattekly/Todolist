import React, {useState} from 'react';
import './App.css';
import TodoList, {TasksType} from "./TodoList";
import {v1} from "uuid";

export type FilerValueType = "all" | "active" | "completed"

type TodolistType = {
    id: string
    title: string
    filter: FilerValueType
}


type TaskStateType = {
    [todoListId: string]: Array<TasksType>
}

function App() {

const todoList_1 = v1()
const todoList_2 = v1()
const [todoList, setTodoList] = useState<Array<TodolistType>>([
    {id: todoList_1, title: "What to learn", filter: "all"},
    {id: todoList_2, title: "What to buy", filter: "all"},
])

    const [tasks, setTask] = useState<TaskStateType>({
        [todoList_1] : [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "React", isDone: false},
            {id: v1(), title: "Redux", isDone: false}
        ],
        [todoList_2]: [
            {id: v1(), title: "Water", isDone: true},
            {id: v1(), title: "Beer", isDone: true},
            {id: v1(), title: "Bread", isDone: false},
            {id: v1(), title: "Milk", isDone: false}
        ]
    })


    const removeTask = (id: string) => {
        setTask(tasks.filter((t) => t.id !== id))
    }

    const [filter, setFilter] = useState<FilerValueType>('all')
    const changeFilter = (filter: FilerValueType) => {
        setFilter(filter)
    }

    const  addTask = (title: string) => {
        const newTask: TasksType = {
            id: v1(),
            title: title,
            isDone: false
        }
        setTask([newTask, ...tasks])
    }

    const changeTaskStatus = (taskId: string, newStatus: boolean) => {
const updateTasks: Array<TasksType> = tasks.map(t => t.id === taskId ? {...t, isDone: newStatus} : t)
        setTask(updateTasks)
    }

const getFilteredTasks = (t: Array<TasksType>, f: FilerValueType) => {
    let tasksForTodolist = t;
    if (f === "active") {
        tasksForTodolist = t.filter(t => !t.isDone)
    }
    if (f === "completed") {
        tasksForTodolist = t.filter(t => t.isDone)
    }
    return tasksForTodolist
}

    return (
        <div className="App">
            <TodoList title={todoListTitle}
                      tasks={getFilteredTasks(tasks, filter)}
                      removeTask={removeTask}
                      filter={filter}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeTaskStatus={changeTaskStatus}/>
        </div>
    );
}

export default App;
