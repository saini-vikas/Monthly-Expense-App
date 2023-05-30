import "./YearExpense.css"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);





const YearExpense = (props) => {
    const year = props.selectYear;
    
    const filterExpenses = props.expenses.filter(expense => {
        const date = new Date(expense.date);
        return date.getFullYear() == year;
    })

    const categoryTotals = {"Transportation" : 0, "Shopping": 0, "Grocery" : 0,
    "Entertainment" : 0, "Housing" : 0, 
    "Utilities": 0, "Insurance":0};
   
    console.log(filterExpenses);

    filterExpenses.forEach(expense => {
    const { category, amount } = expense;
  
    if (categoryTotals[category]) {
        categoryTotals[category] += amount;
    } else {
        categoryTotals[category] = amount;
    }
    });

  
    console.log(Object.keys(categoryTotals));
    console.log(Object.values(categoryTotals));

    const data = {
        labels: Object.keys(categoryTotals),
        labelsColor: 'white',
        datasets: [
          {
            label: " Total",
            data: Object.values(categoryTotals),
            backgroundColor: [
              'rgba(255, 99, 132 )',
              'rgba(54, 162, 235 )',
              'rgba(255, 206, 86)',
              'rgba(75, 192, 192)',
              'rgba(153, 102, 255)',
              'rgba(255, 159, 64)',
              '#9CFF2E'
            ],
            
          },
        ],
      };
    return (
        <div className="year-expense">
          
            <Doughnut data={data}/>
        </div>
    );
}

export default YearExpense;