import React, {ChangeEvent, useState} from 'react';
import TextField from '@mui/material/TextField';


type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
    disabled?: boolean
}

export const EditableSpan = React.memo(function (props: EditableSpanPropsType) {
    console.log('EditableSpan called');
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.value);

    const activateEditMode = () => {
        if (!props.disabled) {
            setEditMode(true);
            setTitle(props.value);
        } else return
    }
    const activateViewMode = () => {
        setEditMode(false);
        props.onChange(title);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
        ?
        <TextField value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode} disabled={props.disabled}/>
        : <span onDoubleClick={activateEditMode}>{props.value}</span>
});
