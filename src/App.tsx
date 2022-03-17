import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./components/NewComponent";

export type currencyType = 'All' | 'RUBLS' | 'Dollars'

function App() {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    let [nameButton, setNameButton] = useState<currencyType>('All')
    let currentMoney = money
    if (nameButton === 'RUBLS') {currentMoney = money.filter((filtredMoney)=>filtredMoney.banknots==='RUBLS')}
    if (nameButton === 'Dollars') {currentMoney = money.filter((filtredMoney)=>filtredMoney.banknots==='Dollars')}
    const onClickHandler = (currency: currencyType) => {
        setNameButton(currency)
    }
    return (
        <>
           <NewComponent currentMoney={currentMoney} onClickHandler={onClickHandler}/>
        </>

    );
}

export default App;
