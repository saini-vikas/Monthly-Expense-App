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
   

    filterExpenses.forEach(expense => {
    const { category, amount } = expense;
  
    if (categoryTotals[category]) {
        categoryTotals[category] += amount;
    } else {
        categoryTotals[category] = amount;
    }
    });


    const data = {
        labels: Object.keys(categoryTotals),
        datasets: [
          {
            label: " Total",
            data: Object.values(categoryTotals),
            borderColor: 'transparent',
            backgroundColor: [
              '#2192FF',
              '#4EF037',
              '#ED2B2A',
              '#7149C6',
              '#40DFEF',
              '#F94892',
              '#FFEA20'
            ],         
          },
        ],
    };
    const options = {
      plugins : {
        title: {
          display: true,
            text: 'Anual Summary ' + props.selectYear,
            color: "white"
        },
        legend: {
          position: "bottom",
          labels: {
            boxWidth: 10,
            padding: 15,
            color: 'white', 
            font: {
              size: 10
            },
          },
      },
      }
      
  };
    return (
        <div className="year-expense">
          
            <Doughnut data={data} options={options}/>
        </div>
    );
}

export default YearExpense;