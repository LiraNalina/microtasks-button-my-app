import React from "react";
import { FilterType } from "./App";
import './App.css'

export type MoneyObjType = {
    banknote: string
    nominal: number
    number: string
}

type NewComponentType = {
    onClickFilterHandler: (nameButton: FilterType) => void
    currentMoney: Array<MoneyObjType>
}

export const NewComponent = (props: NewComponentType) => {

    return (
        <div>
            <ul className="list">
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div className="button">
                <button className="inUse" onClick={() => props.onClickFilterHandler('all')}>all</button>
                <button onClick={() => props.onClickFilterHandler('dollar')}>dollar</button>
                <button onClick={() => props.onClickFilterHandler('euro')}>euro</button>
            </div >
        </div>
    )
}