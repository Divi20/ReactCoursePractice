//a component must resturn a jsx
// cannot be return - error asking to return something 
// return null will work
//className istead of class becuase class is a keyword in js
import './ExpenseItems.css'
function ExpenseItems() {

    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;
    return (
        <div className="expense-item">
            <div>{expenseDate.toLocaleString('en-US', {month:'long'})}</div>
            <div className="expense-item__description">
            <h2>Car Insurance {1+1}</h2>
            <div className="expense-item__pr"> $294.67</div>
            </div>
        </div>
    )
}

export default ExpenseItems;