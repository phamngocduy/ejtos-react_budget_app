import React, {useContext, useState} from 'react'
import {AppContext} from '../context/AppContext'

function Budget() {
    const {budget, expenses, currency} = useContext(AppContext)
    const [newBudget, setNewBudget] = useState(budget)
    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0)
    
    function handleBudgetChange(event) {
        if (event.target.value > 20000)
            alert('The value cannot exceed upper limit ' + currency + 20000)
        else if (event.target.value < totalExpenses)
            alert('You cannot reduce the budget value lower than the spending')
        else setNewBudget(event.target.value)
    }
    
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    )
}

export default Budget