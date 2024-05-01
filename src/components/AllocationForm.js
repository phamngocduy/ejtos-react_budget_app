import React, {useContext, useState} from 'react'
import {AppContext} from '../context/AppContext'

function AllocationForm(props) {
    const {dispatch, remaining, expenses, currency} = useContext(AppContext)
    const [name, setName] = useState('')
    const [cost, setCost] = useState(0)
    const [action, setAction] = useState('')

    function submitEvent() {
        if (cost > remaining) {
            alert('The value cannot exceed remaining funds ' + currency + remaining)
            return setCost('')
        }

        dispatch({
            type: action === 'Reduce' ? 'RED_EXPENSE' : 'ADD_EXPENSE',
            payload: {
                name: name,
                cost: parseInt(cost)
            }
        })
    }

    return (
        <div>
            <div className='row'>
                <div className='input-group mb-3' style={{marginLeft:'2rem'}}>
                    <div className='input-group-prepend'>
                        <label className='input-group-text' htmlFor='inputGroupSelect01'>Department</label>
                    </div>
                    <select className='custom-select' onChange={event => setName(event.target.value)} id='inputGroupSelect01'>
                        <option defaultValue>Choose...</option>
                        { expenses.map(expense => (
                            <option key={expense.name} value={expense.name}>{expense.name}</option>
                        ))}
                    </select>
                    <div className='input-group-prepend' style={{marginLeft:'2rem'}}>
                        <label className='input-group-text' htmlFor='inputGroupSelect02'>Allocation</label>
                    </div>
                    <select className='custom-select' onChange={event => setAction(event.target.value)} id='inputGroupSelect02'>
                        <option defaultValue value='Add'>Add</option>
                        <option value='Reduce'>Reduce</option>
                    </select>
                    <div className='input-group-prepend' style={{marginLeft:'2rem'}}>
                        <label className='input-group-text'>{currency}</label>
                    </div>
                    <input type='number' value={cost} onChange={event => setCost(event.target.value)} style={{size:10}} required/>
                    <button className='btn btn-primary' onClick={submitEvent} style={{marginLeft:'2rem'}}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default AllocationForm