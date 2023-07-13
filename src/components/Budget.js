import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);
    const [bud, setBud] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const onChange = (event) => {
        if (event.target.value > 20000) {
            alert('The budget cannot exceed £20000');
            return;
        }
        if (event.target.value < totalExpenses) {
            alert('The budget value should not be lower than the spending');
            return;
        }
        setBud(event.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: bud
        });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                type='number'
                id='budget'
                step={10}
                value={bud}
                onChange={onChange}
                style={{ width: '100px' }} />
        </div>
    );
};
export default Budget;
