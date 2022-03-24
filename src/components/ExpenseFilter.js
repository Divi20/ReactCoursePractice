import './ExpenseFilter.css';
import {useState} from 'react';
function ExpenseFilter(props) {
    const [year, setYear] = useState((new Date()).getFullYear());

    const handleYearChange = (event) =>{
        setYear(event.target.value);
        props.filterExpensesList(event.target.value);
    }
        return (
          <div className='expenses-filter'>
            <div className='expenses-filter__control'>
              <label>Filter by year</label>
              <select value={year} onChange={handleYearChange}>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
              </select>
            </div>
          </div>
        )
}

export default ExpenseFilter;