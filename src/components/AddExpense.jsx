import "./AddExpense.css"
import { useState } from "react";


const AddExpense = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    const [enteredCategory, setEnteredCategory] = useState("");

    const handleTitleChange = (event) => {
        setEnteredTitle(event.target.value);
        console.log(event.target.value);
    };
    const handleAmountChange = (event) => {
        setEnteredAmount(event.target.value);
        console.log(event.target.value);
    };
    const handleDateChange = (event) => {
        setEnteredDate(event.target.value);
        console.log(event.target.value);
    };
    const handleCategoryChange = (event) => {
        setEnteredCategory(event.target.value);
        console.log(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        try {
            await fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({enteredTitle, enteredAmount,  enteredCategory,  enteredDate})
            }).then(
                props.onAddExpense()
            )
            // Form data successfully sent to the backend
            // You can perform any additional actions here, like showing a success message
            console.log("Success");
            setEnteredAmount("");
            setEnteredCategory("");
            setEnteredDate("");
            setEnteredTitle("");
        } catch (error) {
            // Handle error, display error message, etc.
            console.log(error);
        }
    }

    return (
        <div className="add-expense">
            <form className="row" onSubmit={handleSubmit}>
                <div className="col-4 mb-2">
                    <label htmlFor="title"  className="col-form-label">Title: </label>
                </div>
                <div className="col-6">
                    <input type="text" id="title" value={enteredTitle} onChange={handleTitleChange} className="form-control form-control-sm" />
                </div>
                <div className="col-4 mb-2">
                    <label htmlFor="amount" className="col-form-label">Amount: </label>
                </div>
                <div className="col-6">
                    <input type="text" id="amount" value={enteredAmount} onChange={handleAmountChange} className="form-control form-control-sm" />
                </div>
                <div className="col-4 mb-2">
                    <label htmlFor="date" className="col-form-label">Date: </label>
                </div>
                <div className="col-6">
                    <input type="date" id="date" value={enteredDate} onChange={handleDateChange} className="form-control form-control-sm" />
                </div>
                <div className="col-4 mb-2">
                <label htmlFor="exampleDataList" className="col-form-label">Category:</label>
                </div>
                <div className="col-6">
                <input className="form-control form-control-sm" value={enteredCategory} onChange={handleCategoryChange} list="datalistOptions" id="exampleDataList"/>
                <datalist id="datalistOptions">
                    <option value="Grocery"/>
                    <option value="Transportation"/>
                    <option value="Entertainment"/>
                    <option value="Shopping"/>
                    <option value="Housing"/>
                    <option value="Insurance"/>
                    <option value="Utilities"/>
                </datalist>
                </div>
                <div className="col-10 button">
                <button className="btn btn-dark" type="submit">Add new expense</button>
                </div>
                
                
            </form>
        </div>
    )
}

export default AddExpense;