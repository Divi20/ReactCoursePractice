//a component must resturn a jsx
// cannot be return - error asking to return something 
// return null will work
//className istead of class becuase class is a keyword in js
import './ExpenseItems.css'
function ExpenseItems() {
    return (
        <div className="expense-item">
            <div>March 28th 2021</div>
            <div className="expense-item__description">
            <h2>Car Insurance</h2>
            <div className="expense-item__pr"> $294.67</div>
            </div>
        </div>
    )
}

export default ExpenseItems;