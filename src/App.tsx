import React, {useState} from 'react';
import './App.css';
import TodoList, {TasksType} from "./TodoList";
import {v1} from "uuid";
import {Input} from "./components/Input";

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
        [todoList_1]: [
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


    const editTask= (todoListId: string, taskId: string, newTitle: string) => {

    }

    const removeTask = (id: string, todoListId: string) => {
        const copyTasks = {...tasks}
        copyTasks[todoListId] = copyTasks[todoListId].filter((t) => t.id !== id)
        setTask(copyTasks)
        //setTask({...tasks, [todoListId]: tasks[todoListId].filter((t) => t.id !== id)})
    }

    // const [filter, setFilter] = useState<FilerValueType>('all')
    // const changeFilter = (filter: FilerValueType) => {
    //     setFilter(filter)
    // }

    const addTask = (title: string, todoListId: string) => {
        const newTask: TasksType = {
            id: v1(),
            title: title,
            isDone: false
        }
        setTask({...tasks, [todoListId]: [newTask, ...tasks[todoListId]]})
    }

    const changeTaskStatus = (taskId: string, newStatus: boolean, todoListId: string) => {
        setTask({...tasks, [todoListId]: tasks[todoListId].map(t => t.id === taskId ? {...t, isDone: newStatus} : t)})
    }

    const changeTodolistFilter = (filter: FilerValueType, todoListId: string) => {
        setTodoList(todoList.map(tl => tl.id === todoListId ? {...tl, filter: filter} : tl))
    }

    const removeTodoList = (todoListId: string) => {
        setTodoList(todoList.filter(tl => tl.id !== todoListId))
        delete tasks[todoListId]
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

    const addTodolist = (newTitle: string) => {
        const newTodolistId = v1()
        const newTodolist: TodolistType = {id: newTodolistId, title: newTitle, filter: "all"}
        setTodoList([...todoList, newTodolist])
        setTask({...tasks, [newTodolistId]: []})
    }

    const todolistComponents = todoList.map(tl => {
        return (
            <div>

                <TodoList
                    key={tl.id}
                    todoListId={tl.id}
                    title={tl.title}
                    filter={tl.filter}
                    tasks={getFilteredTasks(tasks[tl.id], tl.filter)}
                    removeTask={removeTask}
                    changeTodolistFilter={changeTodolistFilter}
                    addTask={addTask}
                    changeTaskStatus={changeTaskStatus}
                    removeTodoList={removeTodoList}/>
            </div>
        )
    })

    return (
        <div className="App">
            <Input callback={addTodolist}/>
            {todolistComponents}
        </div>
    );
}

export default App;
