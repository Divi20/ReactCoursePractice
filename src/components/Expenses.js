import { useEffect, useState } from "react";
import ExpenseItems from "./ExpenseItems";
import Card from "./Card";
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from './ExpensesChart';
function Expenses( props) {
    const [expensesVar, setExpensesVar] = useState(props.expenses);
    console.log("test exp2", expensesVar)
    const updateExpensesDisplayList = (year) =>{
     var exList =  props.expenses.filter((ex) =>{
      return ex.date.getFullYear().toString() === year;
      })

      setExpensesVar(exList)
    }

    return <div>
    <ExpenseFilter filterExpensesList = {updateExpensesDisplayList}/>
    <ExpensesChart expenses={expensesVar} />
      <Card className="expenses">
        {
          expensesVar.map((ex, i) => {
            return <ExpenseItems title={ex.title} amount={ex.amount} date={ex.date} key={i} />
          })
        }
      </Card>
    </div>

}

export default Expenses