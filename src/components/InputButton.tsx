import React, {ChangeEvent, useState} from 'react';
import {messageType} from "../App";

type InputPropsType = {
    updateMessage: (message: string)=>void
}

export const InputButton = (props: InputPropsType) => {
    let [title, setTitle] = useState('')
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(title = event.currentTarget.value)
    }
    const onClickButtonHandler = () => {
        props.updateMessage(title)
        setTitle('')

    }
    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};