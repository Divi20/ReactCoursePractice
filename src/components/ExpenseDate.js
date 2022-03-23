function ExpenseDate(props) {
    const date = props.date;
    return  <div>{date.toLocaleString('en-US', {month:'long'}) + " " +  date.toLocaleString('en-US', {day:'2-digit'}) + " " +  date.getFullYear()}</div>
}

export default ExpenseDate;