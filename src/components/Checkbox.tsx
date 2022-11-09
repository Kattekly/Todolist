import React, {ChangeEvent} from 'react';
import Checkbox from "@mui/material/Checkbox";

type PropsType = {
    checked: boolean
    callback: (isDone: boolean) => void
}

export const CheckBOX = (props: PropsType) => {
    const {callback,  checked} = props
  const onChangeHandler= (e: ChangeEvent<HTMLInputElement>) => {
      callback(e.currentTarget.checked)
    }

    return (
        <Checkbox onChange={onChangeHandler} checked={checked}/>
    );
};