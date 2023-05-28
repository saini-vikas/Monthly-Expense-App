import "./AddExpense.css"


const AddExpense = () => {
    return (
        <div className="add-expense">
            <form className="row">
                <div className="col-4 mb-2">
                    <label htmlFor="title" className="col-form-label">Title: </label>
                </div>
                <div className="col-6">
                    <input type="text" id="title" className="form-control form-control-sm" />
                </div>
                <div className="col-4 mb-2">
                    <label htmlFor="amount" className="col-form-label">Amount: </label>
                </div>
                <div className="col-6">
                    <input type="decimal" id="amount" className="form-control form-control-sm" />
                </div>
                <div className="col-4 mb-2">
                    <label htmlFor="date" className="col-form-label">Amount: </label>
                </div>
                <div className="col-6">
                    <input type="date" id="date" className="form-control form-control-sm" />
                </div>
                <div className="col-4 mb-2">
                <label htmlFor="exampleDataList" className="col-form-label">Category:</label>
                </div>
                <div className="col-6">
                <input className="form-control form-control-sm" list="datalistOptions" id="exampleDataList"/>
                <datalist id="datalistOptions">
                    <option value="San Francisco"/>
                    <option value="New York"/>
                    <option value="Seattle"/>
                    <option value="Los Angeles"/>
                    <option value="Chicago"/>
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