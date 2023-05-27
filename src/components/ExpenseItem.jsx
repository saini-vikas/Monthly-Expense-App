import "./ExpenseItem.css"


const ExpenseItem = (props) => {
    const month = props.expense.date.toLocaleString("en-US", {month: "long"});
    const day = props.expense.date.toLocaleString("en-US", {day: "numeric"});
    return (
        <div className="expense-item">
            <div className="date">
                <h1 className="day">{(day < 10)? "0" : ""}{day}</h1>
                <p className="month-year">{month}</p>
            </div>
            <div className="title">
                <h2>{props.expense.title}</h2>
            </div>
            <div className="amount">
                <h1>${props.expense.amount}</h1>
            </div>

        </div>
    )
}

export default ExpenseItem;