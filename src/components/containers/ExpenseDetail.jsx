import "./ExpenseDetail.css"
import { useState } from "react";
import YearExpense from "../YearExpense";
import ExpenseList from  "../ExpenseList.jsx"


const ExpenseDetail = (props) => {
   
    return (
        <div className="expense-detail">
            <div className="year-summary">
                <YearExpense/>
            </div>
            <div className="complete-expense-list">
                
                <ExpenseList expenses={props.expenses} selectYear={props.selectYear}/>
            </div>
        </div>
    )
}

export default ExpenseDetail;