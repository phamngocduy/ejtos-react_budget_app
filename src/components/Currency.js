import React, {useContext} from 'react'
import {AppContext} from '../context/AppContext'

function Currency() {
    const {dispatch} = useContext(AppContext)

    function changeCurrency(value) {
        dispatch({
            type: 'SET_CURRENCY',
            payload: value
        })
    }
    
    return (
        <div className='alert alert-secondary'>
            <span>Currency:</span>
            <select className='custom-select bg-info' onChange={event => changeCurrency(event.target.value)}>
                <option value='$'>$ Dollar</option>
                <option defaultValue value='£'>£ Pound</option>
                <option value='€'>€ Euro</option>
                <option value='₹'>₹ Ruppee</option>
            </select>
        </div>
    )
}

export default Currency