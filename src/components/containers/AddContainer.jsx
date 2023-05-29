import "./AddContainer.css"
import MonthlySummary from "../MonthlySummary";
import AddExpense from "../AddExpense";


const AddContainer = (props) => {
    return (
        <div className="add-container">
            <MonthlySummary/>
            <AddExpense onAddExpense={props.onAddExpense}/>
        </div>
    )
}

export default AddContainer;