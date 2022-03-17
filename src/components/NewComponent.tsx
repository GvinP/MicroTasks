import React from "react";
import {currencyType} from "../App";

type NewComponentPropsType = {
    currentMoney: Array<MoneyType>,
    onClickHandler: (currency: currencyType)=>void
}
type MoneyType = {
    banknots: string,
    value: number,
    number: string
}
export const NewComponent = (props: NewComponentPropsType) => {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })
                }
            </ul>
            <div>
                <button onClick={() => props.onClickHandler('All')}>All</button>
                <button onClick={() => props.onClickHandler('RUBLS')}>RUBLS</button>
                <button onClick={() => props.onClickHandler('Dollars')}>Dollars</button>
            </div>

        </>
    )
}