import React, {useState} from 'react';
import './App.css';
import TodoList, {TasksType} from "./TodoList";

export type FilerValueType = "all" | "active" | "completed"

function App() {
    const todoListTitle: string = "What to learn"
    const [tasks, setTask] = useState<Array<TasksType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
        {id: 4, title: "Redux", isDone: false}
    ])

    const removeTask = (id: number) => {
        setTask(tasks.filter((t) => t.id !== id))
    }

    const [filter, setFilter] = useState<FilerValueType>('all')
    const changeFilter = (filter: FilerValueType) => {
        setFilter(filter)
    }

    let tasksForTodolist = tasks;
    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false)
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true)
    }

    return (
        <div className="App">
            <TodoList title={todoListTitle}
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
