import { useState } from 'react';
import './ExpenseForm.css';
//default natuture of button 



const ExpenseForm = (props) => {
    // const [userInput, setUserInput] = useState({
    //     eneteredTitle: '',
    //     eneteredAmount : '',
    //     eneteredDate : ''
    // })
    
    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');

    const titleChangeHandler = (event) => {
        // setUserInput((pState) => {
        //     return {
        //         ...userInput,
        //         eneteredTitle: event.target.value
        //     }
        // })

        setTitle(event.target.value);
    }

    const amountChangeHandler = (event) =>{
        //setUserInput((pState) => {
        //     return {
        //         ...userInput,
        //         eneteredAmount: event.target.value
        //     }
        // })

        setAmount(event.target.value);
    }

    const dateChangeHandler = (event) =>{
        // setUserInput((pState) => {
        //     return {
        //         ...userInput,
        //         eneteredDate: event.target.value
        //     }
        // })
        setDate(event.target.value)
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        }

        console.log(expenseData);
        props.onSaveExpenseData(expenseData);

        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value = {enteredTitle} onChange={titleChangeHandler}></input>
                </div>
            </div>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="text" value = {enteredAmount} onChange={amountChangeHandler}></input>
                </div>
            </div>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-30" value = {enteredDate} onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className='new-expense__actions'>
            <button type='submit'> Add Expense</button>
            </div>
            
        </form>
    );
}

export default ExpenseForm;