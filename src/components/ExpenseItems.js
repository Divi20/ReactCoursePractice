//a component must resturn a jsx
// cannot be return - error asking to return something 
// return null will work
//className istead of class becuase class is a keyword in js
import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate';
function ExpenseItems(props) {

    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;

    const {title, amount, date} = props;
    return (
        <div className="expense-item">
           <ExpenseDate date={date}/>
            <div className="expense-item__description">
            <h2> {title}</h2>
            <div className="expense-item__pr"> ${amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItems;