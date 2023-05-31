import "./AddContainer.css"
import MonthlySummary from "../MonthlySummary";
import AddExpense from "../AddExpense";


const AddContainer = (props) => {
    return (
        <div className="add-container">
            <MonthlySummary expenses={props.expenses} selectYear={props.selectYear}/>
            <AddExpense onAddExpense={props.onAddExpense}/>
        </div>
    )
}

export default AddContainer;