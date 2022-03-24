//a component must resturn a jsx
// cannot be return - error asking to return something 
// return null will work
//className istead of class becuase class is a keyword in js
import {useState} from 'react';
import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate';
import Card from './Card';
function ExpenseItems(props) {
    const {title, amount, date} = props;
    const [tempTitle, setTitle] = useState(title);
    //useState always returns an array 

    // difference between variable and state->check***

    let temp = title;

    //this gets consoled but render function is not called , so we need useState which has state and set Function , which changes the state and then calls the render function


    const clickHandler = () =>{
       temp= 'Updated!'
       console.log('title', temp);
       setTitle('Updated')
    }

    
    return (
        <Card className="expense-item">
           <ExpenseDate date={date}/>
            <div className="expense-item__description">
            <h2> {tempTitle}</h2>
            <div className="expense-item__pr"> ${amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItems;