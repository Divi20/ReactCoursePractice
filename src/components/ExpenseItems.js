//a component must resturn a jsx
// cannot be return - error asking to return something 
// return null will work
//className istead of class becuase class is a keyword in js
import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate';
import Card from './Card';
function ExpenseItems(props) {
    const {title, amount, date} = props;

    let temp = title;

    //this gets consoled but render function is not called , so we need useState which has state and set Function , which changes the state and then calls the render function
    

    const clickHandler = () =>{
       temp= 'Updated!'
       console.log('title', temp);
    }

    
    return (
        <Card className="expense-item">
           <ExpenseDate date={date}/>
            <div className="expense-item__description">
            <h2> {temp}</h2>
            <div className="expense-item__pr"> ${amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItems;