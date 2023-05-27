import "./App.css";
import ExpenseDetail from "./components/ExpenseDetail";
import AddExpense from "./components/AddExpense";
import MonthlySummary from "./components/MonthlySummary";




function App() {
  const expenses= [
    {
      title: "Grocery",
      date: new Date(2022, 11, 12),
      amount: 289.56,
    } ,
    {
      title: "Insurance",
      date: new Date(2021, 8, 5),
      amount: 439.61,
    },
    {
      title: "Coffee",
      date: new Date(2021, 4, 25),
      amount: 39.61,
    }
  ]
  return (
    <div className="App container">
      <h1>Expense Tracker</h1>
      <MonthlySummary/>
      <AddExpense/>
      <ExpenseDetail expenses={expenses}/>
    </div>
  );
}

export default App;