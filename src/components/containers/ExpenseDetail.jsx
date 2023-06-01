import "./ExpenseDetail.css"
import YearExpense from "../YearExpense";
import ExpenseList from  "../ExpenseList.jsx"


const ExpenseDetail = (props) => {
   
    return (
        <div className="expense-detail">
            <div className="year-summary">
                <YearExpense expenses={props.expenses} selectYear={props.selectYear}/>
            </div>
            <div className="complete-expense-list">
                
                <ExpenseList onEditExpense={props.onEditExpense} onUpdateExpense={props.onAddExpense} expenses={props.expenses} selectYear={props.selectYear}/>
            </div>
        </div>
    )
}

export default ExpenseDetail;