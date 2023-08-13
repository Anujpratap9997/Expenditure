import { useState } from "react";
import ExpensesList from "./ExpensesList";
// import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

import Card from "../UI/Card";
import './Expenses.css';




function Expenses(props){
    const [filteredYear,setFilteredYear] =useState('2020');
 

    const filterChangeHandler=(SelectedYear)=>{
        setFilteredYear(SelectedYear);
    };

    const filteredExpenses=props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear;
    });

    // let expensesContent =<p>No Expenses Found.</p>;

    // if (filteredExpenses.length>0){
    //     expensesContent =filteredExpenses.map(expense =>( <ExpenseItem title={expense.title} amount={expense.amount}
    //         date={expense.date} key={expense.id} id={expense.id} />));
    // }




    return( <div> <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

            <ExpensesChart expenses={filteredExpenses}/>

            <ExpensesList items={filteredExpenses}/>
            {/* {filteredExpenses.length===0 && <p>No Expenses Found.</p> }
            {filteredExpenses.length > 0 && (filteredExpenses.map(expense => <ExpenseItem title={expense.title} amount={expense.amount}
                date={expense.date} key={expense.id} id={expense.id} />))} */}
    </Card>
    </div>
    )
}

export default Expenses;