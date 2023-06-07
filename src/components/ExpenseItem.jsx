import "./ExpenseItem.css"



const ExpenseItem = (props) => {
    const date = new Date(props.expense.date);
    const month = date.toLocaleString("en-US", {month: "short"});
    const day = date.getDate() + 1;
    const year = date.getFullYear();


    const editExpense = (expense) => {
        props.onEditExpense(expense)
    }

    const removeExpenses = (e) => {
        console.log(e);
        try {
            fetch('/api/delete-expense', {
                method: 'DELETE',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({e})
            }).then(res => res.json())
            .then(data => {
                alert(data.message)
                props.onUpdateExpense()
            });
        }
        catch (err) {
            console.error(err);
        }
    }
    
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
                    <h1>${props.expense.amount.toFixed(2)}</h1>
                </div>
            </div>
            
            <div className="edits">
                <hr />
                <div className="icons">
                    <i className="bi bi-pencil-square" onClick={() => editExpense(props.expense)} style={{color: '#9CFF2E', fontSize: '14'}}></i>
                    <i className="bi bi-trash-fill" onClick={() => removeExpenses(props.expense)} style={{color: "#F45050", fontSize: '14'}}></i>
                </div>
                
            </div>

        </div>
    )
}

export default ExpenseItem;