import React, {useState} from 'react';
import './App.css';
import {InputButton} from "./components/InputButton";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

export type currencyType = 'All' | 'RUBLS' | 'Dollars'

export type messageType = {
    message: string
}

function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])
    let [title, setTitle] = useState('')
    const updateMessage = (title: string) => {
        setMessage([{message: title}, ...message])
        setTitle('')
    }

    return (
        <>
            <div>
               {/*<InputButton updateMessage={updateMessage}/>*/}
                <Input title={title} setTitle={setTitle}/>
                <Button name={'+'} callBack={()=>updateMessage(title)}/>
                {message.map((el, index)=>{
                    return (
                        <div key={index}>{el.message}</div>
                    )
                })}
            </div>

        </>
    );
}

export default App;
