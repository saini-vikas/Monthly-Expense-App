import "./ExpenseDetail.css"
import YearExpense from "./YearExpense";
import ExpenseList from  "./ExpenseList.jsx"


const ExpenseDetail = (props) => {
    return (
        <div className="expense-detail">
            <div className="year-summary">
                <YearExpense/>
            </div>
            <div className="complete-expense-list">
                <ExpenseList expenses={props.expenses}/>
            </div>
        </div>
    )
}

export default ExpenseDetail;