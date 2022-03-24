import { useState } from "react";
import ExpenseItems from "./ExpenseItems";
import Card from "./Card";
import './Expenses.css';
import ExpenseFilter from "./ExpenseFilter";
function Expenses( props) {
    const exp = props.expenses;
    const [expensesVar, setExpensesVar] = useState(exp);

    const updateExpensesDisplayList = (year) =>{
     var exList =  expensesVar.filter((ex) =>{
      return ex.date.getFullYear() == year;
      })

      setExpensesVar(exList)
    }

    return <div>
    <ExpenseFilter filterExpensesList = {updateExpensesDisplayList}/>
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