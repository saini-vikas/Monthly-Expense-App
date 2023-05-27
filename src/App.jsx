import "./App.css";
import ExpenseList from "./components/ExpenseList";



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
      <ExpenseList expenses={expenses}/>
    </div>
  );
}

export default App;
