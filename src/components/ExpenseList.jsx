import "./ExpenseList.css"
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
    props.expenses.map(e => {
        const date = new Date(e.date);
        //console.log(date.getFullYear())
    })
    const filterExpenses = props.expenses.filter(expense => {
        const date = new Date(expense.date);
        return date.getFullYear() == props.selectYear;
    })

    console.log(filterExpenses);
    console.log(props.selectYear);
    return (
        <div className="expense-list">
            
            {filterExpenses.map((expense, index) => (
                <ExpenseItem key={index} expense={expense}/>
            ))
            }
        </div>
    );
}

export default ExpenseList;