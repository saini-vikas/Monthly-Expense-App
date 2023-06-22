import "./YearExpense.css"
import { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const YearExpense = (props) => {
    const year = props.selectYear;
    const width = props.screenWidth;
    const [style, setStyle] = useState({position: "bottom", aspectRatio: 1, fontSize:10, padding: 15});
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

    useEffect(() => {
      if (width <= 850 && width > 500){
        setStyle({ position: "bottom", aspectRatio: 1, padding: 10, fontSize: 10});
        console.log("position Right!")
      }
      else if (width <= 500) {
        setStyle({position: "bottom", fontSize: 10, padding: 10});
        console.log("position Bottom!")
      }
    }, [width])


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
              '#FF6464',
              '#7149C6',
              '#40DFEF',
              '#FF74B1',
              '#FFEA20'
            ],         
          },
        ],
    };
    const options = {
      maintainAspectRation: true,
      aspectRatio: style.aspectRatio,
      plugins : {
        title: {
          display: true,
            text: 'Anual Expense Summary ' + props.selectYear,
            color: "white"
        },
        legend: {
          position: style.position,
          labels: {
            boxWidth: 10,
            padding: style.padding,
            color: 'white', 
            font: {
              size: style.fontSize,
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