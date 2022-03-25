import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';
import { useState } from 'react';
function App() {

  const expensesVar = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(expensesVar)

  const addExpenseHandler = expense =>{
    console.log("xygv", expense)
    setExpenses((prev)=>{
      return [...prev, expense]
    })
    console.log(expenses)
  }

  const [openForm, setOpenForm] = useState(false);

  const openAddFormHandler = () =>{
    setOpenForm(!openForm);
    console.log(openForm)
  }

  return (
    <div>
      <h2>Lets get started</h2>
      {  openForm ? 
      <NewExpense onAddExpense={addExpenseHandler} closeForm={openAddFormHandler}/>
      :
      <div className="new-expense" style={{display: "flex", justifyContent : "center", alignItems : "center"}}>
      <button type='button' onClick={openAddFormHandler}> Add Expense Form</button>
      </div> 
      }
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
