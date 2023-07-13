import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const CurrencyItem = () => {
    const { currency, dispatch } = useContext(AppContext);

    const onSelect = (eventKey) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: eventKey
        })
    }
    
    return (
        <div className='alert alert-secondary'>
            <DropdownButton variant='alert' title={`Currency (${currency})`} onSelect={onSelect}>
                <Dropdown.Item eventKey='$'>$ Dollar</Dropdown.Item>
                <Dropdown.Item eventKey='£'>£ Pound</Dropdown.Item>
                <Dropdown.Item eventKey='€'>€ Euro</Dropdown.Item>
                <Dropdown.Item eventKey='₹'>₹ Ruppee</Dropdown.Item>
            </DropdownButton>
        </div>
    )
}

export default CurrencyItem;