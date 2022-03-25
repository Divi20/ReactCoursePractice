import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

function NewExpense (props) {

    const saveExpenseDataHandler = (enteredExpenseData) => {
      
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log("abc", expenseData)
        props.onAddExpense(expenseData);
    };

  
    return <div className="new-expense">
    <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} closeFormFn = {props.closeForm}/>
    </div>
}

export default NewExpense