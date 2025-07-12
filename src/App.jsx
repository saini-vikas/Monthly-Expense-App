import "./App.css";
import { useState, useEffect } from "react";
import ExpenseDetail from "./components/containers/ExpenseDetail";
import AddContainer from "./components/containers/AddContainer";

function App() {
  const [data, setData] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [selectYear, setSelectYear] = useState(2023);
  const [editExpenseContent, setEditExpenseContent] = useState(null);
  const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019];

  useEffect(() => {
    // Function to update window size
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  const editExpense = (expense) => {
    setEditExpenseContent(expense);
  };

  const handleYearChange = (event) => {
    setSelectYear(event.target.value);
  };

  const fetchDataFromDatabase = () => {
    fetch("/api/data")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    fetchDataFromDatabase();
  }, []);

  return (
    <div className="app-container">
      <div className="title-heading">
        <h3>Expense Tracker</h3>
        <div className="filter-by-year">
          <h5>Filter by year </h5>
          <select
            value={selectYear}
            onChange={handleYearChange}
            name="filter-by-year"
            id="filter-by-year"
          >
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <AddContainer
        screenWidth={screenWidth}
        onAddExpense={fetchDataFromDatabase}
        expenseToEdit={editExpenseContent}
        expenses={data}
        selectYear={selectYear}
      />
      <ExpenseDetail
        screenWidth={screenWidth}
        onEditExpense={editExpense}
        onAddExpense={fetchDataFromDatabase}
        expenses={data}
        selectYear={selectYear}
      />
    </div>
  );
}

export default App;
