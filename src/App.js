// import ExpenseItem from "./components/ExpenseItem";
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Intro from "./components/Intro/Intro";


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Printing Paper',
    amount: 64.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 3, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 449.99,
    date: new Date(2021, 5, 15),
  },
  {
    id: 'e5',
    title: 'Bike MAintaince',
    amount: 74.12,
    date: new Date(2019, 8, 12),
  },
  {
    id: 'e6',
    title: 'New Software Purchase',
    amount: 40,
    date: new Date(2019, 6, 21),
  },
  {
    id: 'e7',
    title: 'A SSD',
    amount: 100,
    date: new Date(2020, 3, 19),
  },
  {
    id: 'e8',
    title: 'A Christmas Tree',
    amount: 70,
    date: new Date(2022, 11, 24),
  },
  {
    id: 'e9',
    title: 'New Books',
    amount: 10,
    date: new Date(2019, 4, 15),
  },
];





function App() {

  const [expenses, setExpenses] =useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense=>{

    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];
    });
    // console.log("in app.js");
    // console.log(expense);
  };
 
  // const para =document.createElement('p');
  // para.textContent ='This is also visible';
  // document.getElementById('root').append(para);  // this is the js code for addinfg one paragraph

  return (
    <div>
      <Intro/>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />

    </div>
  );
}

export default App;
