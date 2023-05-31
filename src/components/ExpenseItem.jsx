import "./ExpenseItem.css"



const ExpenseItem = (props) => {
    const date = new Date(props.expense.date);
    const month = date.toLocaleString("en-US", {month: "short"});
    const day = date.getDate() + 1;
    const year = date.getFullYear();
    
    return (
        <div className="expense-item">
            <div className="expense-content">
                <div className="date">
                    <h1 className="day">{(day < 10)? "0" : ""}{day}</h1>
                    <p className="month">{month} {year}</p>
                    
                </div>
                <div className="title">
                    <h2>{props.expense.title}</h2>
                </div>
                <div className="amount">
                    <h1>${props.expense.amount}</h1>
                </div>
            </div>
            
            <div className="edits">
                <hr />
                <div className="icons">
                    <i className="bi bi-pencil-square" style={{color: 'white', fontSize: '14'}}></i>
                    <i className="bi bi-trash-fill" style={{color: 'white', fontSize: '14'}}></i>
                </div>
                
            </div>

        </div>
    )
}

export default ExpenseItem;