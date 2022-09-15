import React from 'react';
import './App.css';
import TodoList from "./TodoList";

function App() {
    const todoListTitle = "What to learn"
    // biznes
    const tasks = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ]
    const todoListTitle2 = "What to buy"
    const tasks2 = [
        {id: 4, title: "Beer", isDone: true},
        {id: 5, title: "Cheese", isDone: true},
        {id: 6, title: "Fish", isDone: true},
    ]
    //graf
    return (
        <div className="App">
            <TodoList title={todoListTitle} tasks={tasks}/>
            <TodoList title={todoListTitle2} tasks={tasks2}/>
        </div>
    );
}

export default App;
