import ExpenseItems from "./ExpenseItems";
import './Expenses.css';
function Expenses( props) {
    const expenses = props.expenses;
    return <div className="card expenses">
    <ExpenseItems title = {expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenseItems title = {expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <ExpenseItems title = {expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
      <ExpenseItems title = {expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
    </div>

}

export default Expenses