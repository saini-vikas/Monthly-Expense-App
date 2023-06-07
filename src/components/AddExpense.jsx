import "./AddExpense.css"
import { useState, useEffect } from "react";


const AddExpense = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    const [enteredCategory, setEnteredCategory] = useState("");
    const [id, setId] = useState(null);
    

    useEffect(() =>{
        if(props.expenseToEdit) {
            setEnteredTitle(props.expenseToEdit.title);
            setEnteredCategory(props.expenseToEdit.category);
            setEnteredAmount(props.expenseToEdit.amount);
            setEnteredDate(props.expenseToEdit.date);
            setId(props.expenseToEdit.id);
        }

    }, [props.expenseToEdit])


    const handleTitleChange = (event) => {
        setEnteredTitle(event.target.value);
        
    };
    const handleAmountChange = (event) => {
        setEnteredAmount(event.target.value);
      
    };
    const handleDateChange = (event) => {
        setEnteredDate(event.target.value);
        
    };
    const handleCategoryChange = (event) => {
        setEnteredCategory(event.target.value);
        
    };

    const cancelEditExpense = (event) => {
        setEnteredAmount("");
        setEnteredCategory("");
        setEnteredDate("");
        setEnteredTitle("");
        setId(null);
    };

    const updateSelectedExpense = (event) => {
        event.preventDefault();
        try {
            fetch('/api/update-expense', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({id, enteredTitle, enteredAmount,  enteredCategory,  enteredDate})
            }).then(res => res.json())
            .then(data => {
                alert(data.message)
                props.onAddExpense()
            });
            console.log("Success");
            setEnteredAmount("");
            setEnteredCategory("");
            setEnteredDate("");
            setEnteredTitle("");
            setId(null);
        }
        catch (err) {
            console.log(err);
        }
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
            }).then(res => res.json())
            .then(data => {
                alert(data.message)
                props.onAddExpense()
            });
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
            <form className="row">
                <div className="col-4 mb-2">
                    <label htmlFor="title"  className="col-form-label">Title: </label>
                </div>
                <div className="col-7">
                    <input type="text" id="title" value={enteredTitle} placeholder="Name of expense" onChange={handleTitleChange} className="form-control form-control-sm" />
                </div>
                <div className="col-4 mb-2">
                    <label htmlFor="amount" className="col-form-label">Amount: </label>
                </div>
                <div className="col-7">
                    <input type="text" id="amount" placeholder="Price of expense" value={enteredAmount} onChange={handleAmountChange} className="form-control form-control-sm" />
                </div>
                <div className="col-4 mb-2">
                    <label htmlFor="date" className="col-form-label">Date: </label>
                </div>
                <div className="col-7">
                    <input type="date" id="date" placeholder="Date of expense" value={enteredDate} onChange={handleDateChange} className="form-control form-control-sm" />
                </div>
                <div className="col-4 mb-2">
                <label htmlFor="exampleDataList" className="col-form-label">Category:</label>
                </div>
                <div className="col-7">
                <input className="form-control form-control-sm" value={enteredCategory} placeholder="Choose" onChange={handleCategoryChange} list="datalistOptions" id="exampleDataList"/>
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
                <div className="col-12 button">
                    { id ?  (<><button className="btn btn-dark" onClick={updateSelectedExpense}>Update expense</button>
                            <button className="btn btn-dark" onClick={cancelEditExpense}>Cancel</button></> ) :
                    <button className="btn btn-dark btn-md" onClick={handleSubmit} type="submit">Add new expense</button>}
                </div>
                
                
            </form>
        </div>
    )
}

export default AddExpense;