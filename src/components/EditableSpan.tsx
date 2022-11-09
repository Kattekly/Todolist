import React, {ChangeEvent, useState} from 'react';

type  EditableSpanType = {
    title: string
    callback: (newTitle: string) => void
}

export const EditableSpan = (props: EditableSpanType) => {
    const[edit, setEdit] = useState(false)
    let[newTitle, setNewTitle] = useState(props.title)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const onClickHandler = () => {
        setEdit(!edit)
        props.callback(newTitle)
    }

    return (
        edit
        ? < input value={newTitle} onBlur={onClickHandler} autoFocus onChange={onChangeHandler}/>
            : <span onClick={onClickHandler}>{props.title}</span>
    );
};