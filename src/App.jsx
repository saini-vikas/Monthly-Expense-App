import "./App.css";
import {useState, useEffect} from "react";
import ExpenseDetail from "./components/containers/ExpenseDetail";
import AddContainer from "./components/containers/AddContainer";


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/data').then(
      response => {
        return response.json();
      }).then( data => {
        setData(data);
      });
  }, []);

  return (
    <div className="App container">
      <div className="title-heading">
        <h3>Expense Tracker</h3>
        <p>{data.title}</p>
      </div>
      <AddContainer/>
      <ExpenseDetail expenses={data}/>
    </div>
  );
}

export default App;
