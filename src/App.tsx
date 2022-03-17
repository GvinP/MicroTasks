import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./components/NewComponent";
import {Button} from "./components/Button";

function App() {
    const buttonFunc1 = (name: string, age: number) => {
        alert(name + age)
    }
    const buttonFunc2 = (name: string, age: number) => {
        alert(name + age)
    }
    const buttonFunc3 = () => {
        alert("I am stupid button")
    }
    let [a, setA] = useState(1)
    const onClickHandler = () => {
      setA(a++)
    }
    const setZero = () => {
      setA(a=0)
    }
    return (
        <div className="App">
            <NewComponent/>
            <Button name={"MyYouTubeChanel-1"} callBack={()=>buttonFunc1("VASYA", 21)}/>
            <Button name={"MyYouTubeChanel-2"} callBack={()=>buttonFunc2("IVAN", 43)}/>
            <Button name={"StupidButton"} callBack={buttonFunc3}/>
            <div>{a}</div>
            <button onClick={onClickHandler}>number</button>
            <button onClick={setZero}>0</button>
        </div>
    );
}

export default App;
