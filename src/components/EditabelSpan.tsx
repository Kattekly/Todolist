import React, {ChangeEvent, useState} from 'react';

type EditabelSpanPropsType = {
    title: string
    callback: (newTitle: string) => void
}


export const EditabelSpan = (props: EditabelSpanPropsType) => {
    const [edit, setEdit] = useState(false)
    const [newTitle, setNewTitle] = useState<string>(props.title)

    const onClickHandler = () => {
        setEdit(!edit)
        props.callback(newTitle)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    return (
      edit ? <input value={newTitle} onBlur={onClickHandler} autoFocus onChange={onChangeHandler}/>
          : <span onClick={onClickHandler}>{props.title}</span>
    );
};

