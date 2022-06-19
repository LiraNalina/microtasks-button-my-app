import React, { useState } from "react";
import './App.css';
import { NewComponent } from "./NewComponent";

export type FilterType = 'all' | 'dollar' | 'euro'

function App() {
  const [money, setMoney] = useState([
    { banknote: 'dollar', nominal: 100, number: 'a1234567890' },
    { banknote: 'dollar', nominal: 50, number: 'z1234567890' },
    { banknote: 'euro', nominal: 100, number: 'w1234567890' },
    { banknote: 'dollar', nominal: 100, number: 'e1234567890' },
    { banknote: 'dollar', nominal: 50, number: 'c1234567890' },
    { banknote: 'euro', nominal: 100, number: 'r1234567890' },
    { banknote: 'dollar', nominal: 50, number: 'x1234567890' },
    { banknote: 'euro', nominal: 50, number: 'v1234567890' },
  ])

  const [filter, setFilter] = useState<FilterType>('all')

  let currentMoney = money

  if (filter === 'euro') {
    currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'euro')
  }
  if (filter === 'dollar') {
    currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'dollar')
  }

  let onClickFilterHandler = (nameButton: FilterType) => {
    setFilter(nameButton)
  }
 
  return (
    <div className="App">

      <NewComponent
        onClickFilterHandler={onClickFilterHandler}
        currentMoney={currentMoney}
      />
    </div >
  )
}

export default App;