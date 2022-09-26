import React, {useState} from 'react';
import './App.css';
import TodoList, {TasksType} from "./TodoList";
import {v1} from "uuid";

export type FilerValueType = "all" | "active" | "completed"

function App() {
    const todoListTitle: string = "What to learn"
    const [tasks, setTask] = useState<Array<TasksType>>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "Redux", isDone: false}
    ])

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
                      changeFilter={changeFilter}
                      addTask={addTask}/>
        </div>
    );
}

export default App;
