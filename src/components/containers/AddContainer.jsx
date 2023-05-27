import "./AddContainer.css"
import MonthlySummary from "../MonthlySummary";
import AddExpense from "../AddExpense";


const AddContainer = () => {
    return (
        <div className="add-container">
            <MonthlySummary/>
            <AddExpense/>
        </div>
    )
}

export default AddContainer;