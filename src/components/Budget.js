import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {
        dispatch,
        budget,
        expenses,
        currency
    } = useContext(AppContext);
    const budgetMax = 20000;

    const handleBudgetChange = (event) => {
        let budgetInput = event.target.value;
        if (budgetInput > budgetMax) {
            alert ("The value cannot exceed the budget maximum 20,000");
            budgetInput = budgetMax;
        }
        let expensesCost = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        if (budgetInput < expensesCost) {
            alert ("You cannot reduce the budget lower than the spending");
            budgetInput = expensesCost;
        }

        dispatch({
            type: "SET_BUDGET",
            payload: budgetInput,
        })
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}</span>
            <input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
