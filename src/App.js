import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import CurrencyItem from './components/CurrencyItem';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-md'>
                        <Budget />
                    </div>
                    <div className='col-md'>
                        <Remaining />
                    </div>
                    <div className='col-md'>
                        <ExpenseTotal />
                    </div>
                    <div className='col-md'>
                        <CurrencyItem />
                    </div>
                </div>
                <div className='row mt-3'>
                    <h2>Allocation</h2>
                    <div className='col-xl'>
                        <ExpenseList />
                    </div>
                </div>
                <div className='row mt-3'>
                    <h2 className='mb-3'>Change Allocation</h2>
                    <div className='col-xl'>
                        <AllocationForm />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
