import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type InputPropsType = {
   callback: (title: string) => void
}


export const Input = (props: InputPropsType) => {
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
        error && setError(false);
        setTitle(e.currentTarget.value)
    }

    const onEnterDownAddTask = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addTask()

    const addTask = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle !== '') {
            props.callback(trimmedTitle)
        } else {
            setError(true)
        }
        setTitle('')
    }

    const errorMessage = error ? <div style={{fontWeight: "bold", color: "darkred"}}>Title is required!</div> : null

    return (
        <div>
            <input className={error ? "error" : ""}
                   value={title}
                   onChange={onChangeSetTitle}
                   onKeyDown={onEnterDownAddTask}/>
            <button onClick={addTask}>+</button>
            {errorMessage}
        </div>
    )
}