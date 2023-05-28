import "./ExpenseList.css"
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
    return (
        <div className="expense-list">
            
            {props.expenses.map((expense, index) => (
                    <ExpenseItem key={index} expense={expense}/>
            ))
            }
        </div>
    );
}

export default ExpenseList;