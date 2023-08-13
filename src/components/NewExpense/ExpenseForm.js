import React, { useState } from "react";

import './ExpenseFrom.css'


const ExpenseForm=(props)=>{
    const [enteredTitle, setenteredTitle] =useState('');
    const [enteredDate, setenteredDate] =useState('');
    const [enteredAmount, setenteredAmount] =useState('');

    const titleChangeHandler=(event)=>{
        setenteredTitle(event.target.value);
    };

    const amountChangeHandler=event=>{
        setenteredAmount(event.target.value);
    };

    const dateChangeHandler=event=>{
        setenteredDate(event.target.value);
    };

    const submitHandler=(event)=>{
        event.preventDefault();

        const expenseData={
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setenteredTitle('');
        setenteredAmount('');
        setenteredDate('');
    };


    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="">Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} required placeholder="Enter Expenditure Title here"/> 
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Amount</label>
                <input type="text" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} required placeholder="Enter Expenditure Amount here" pattern="[0-9]+(\.[0-9]+)?" title="Enter a numerical value"/> 
            </div>
            <div className="new-expense__control">
                <label htmlFor="">Date</label>
                <input type="date" min="2019-01-01" max="2023-07-31" value={enteredDate} onChange={dateChangeHandler} required /> 
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>cancel</button>
            <button type="submit" >Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;