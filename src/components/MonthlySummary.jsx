import "./MonthlySummary.css"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const MonthlySummary = (props) => {

    const filterExpenses = props.expenses.filter(expense => {
        const date = new Date(expense.date);
        return date.getFullYear() == props.selectYear;
    })


    const monthlyData = [
        {label: 'Jan', category: {"Transportation" : 0, "Shopping": 0, "Grocery" : 0, "Entertainment" : 0, "Housing" : 0, "Utilities": 0, "Insurance":0}}, 
        {label: 'Feb', category: {"Transportation" : 0, "Shopping": 0, "Grocery" : 0, "Entertainment" : 0, "Housing" : 0, "Utilities": 0, "Insurance":0}},
        {label: 'Mar', category: {"Transportation" : 0, "Shopping": 0, "Grocery" : 0, "Entertainment" : 0, "Housing" : 0, "Utilities": 0, "Insurance":0}}, 
        {label: 'Apr', category: {"Transportation" : 0, "Shopping": 0, "Grocery" : 0, "Entertainment" : 0, "Housing" : 0, "Utilities": 0, "Insurance":0}},
        {label: 'May', category: {"Transportation" : 0, "Shopping": 0, "Grocery" : 0, "Entertainment" : 0, "Housing" : 0, "Utilities": 0, "Insurance":0}},
        {label: 'Jun', category: {"Transportation" : 0, "Shopping": 0, "Grocery" : 0, "Entertainment" : 0, "Housing" : 0, "Utilities": 0, "Insurance":0}}, 
        {label: 'Jul', category: {"Transportation" : 0, "Shopping": 0, "Grocery" : 0, "Entertainment" : 0, "Housing" : 0, "Utilities": 0, "Insurance":0}},
        {label: 'Aug', category: {"Transportation" : 0, "Shopping": 0, "Grocery" : 0, "Entertainment" : 0, "Housing" : 0, "Utilities": 0, "Insurance":0}}, 
        {label: 'Sep', category: {"Transportation" : 0, "Shopping": 0, "Grocery" : 0, "Entertainment" : 0, "Housing" : 0, "Utilities": 0, "Insurance":0}},
        {label: 'Oct', category: {"Transportation" : 0, "Shopping": 0, "Grocery" : 0, "Entertainment" : 0, "Housing" : 0, "Utilities": 0, "Insurance":0}}, 
        {label: 'Nov', category: {"Transportation" : 0, "Shopping": 0, "Grocery" : 0, "Entertainment" : 0, "Housing" : 0, "Utilities": 0, "Insurance":0}},
        {label: 'Dec', category: {"Transportation" : 0, "Shopping": 0, "Grocery" : 0, "Entertainment" : 0, "Housing" : 0, "Utilities": 0, "Insurance":0}}, 
        
    ]
    for (let data of monthlyData) {
        for (let expense of filterExpenses) {
            let date = new Date(expense.date);
            const {category, amount} = expense;
            let month = date.toLocaleString("en-US", {month: "short"});
            if (month === data.label) {
                data.category[category] += amount;
            }
        }
    }
    const monthlyTransportation = monthlyData.map(m => {
        return m.category.Transportation;
    });
    const monthlyShopping = monthlyData.map(m => {
        return m.category.Shopping;
    });
    const monthlyGrocery = monthlyData.map(m => {
        return m.category.Grocery;
    });
    const monthlyEntertainment = monthlyData.map(m => {
        return m.category.Entertainment;
    });
    const monthlyHousing = monthlyData.map(m => {
        return m.category.Housing;
    });
    const monthlyUtilities = monthlyData.map(m => {
        return m.category.Utilities;
    });
    const monthlyInsurance = monthlyData.map(m => {
        return m.category.Insurance;
    });


    const labels = monthlyData.map(data => {
        return data.label;
    })


    const options = {
        aspectRatio: 1|2,
        plugins: {
          title: {
            display: true,
            text: 'Monthly Expense Summary '+ props.selectYear,
            color: "white"
          },
          legend: {
            labels: {
                boxWidth: 10,
                color: "white",
                font: {
                    size: 10,
                }
            },
            
          }
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
            grid: {
                display: false,
            },
            ticks: {
                color: "white",
            }
            
          },
          y: {
            stacked: true,
            grid: {
                display: false,
            },
            ticks: {
                color: "white",
            }
             
          },
        },
      };
    const data = {
        labels,
        datasets: [
            {label: 'Transportation',
            data:monthlyTransportation,
            backgroundColor: '#2192FF', 
            
            },
            {label: 'Shopping',
            data: monthlyShopping,
            backgroundColor: '#4EF037',
            
            },
            {label: 'Grocery',
            data: monthlyGrocery,
            backgroundColor: '#FF6464',
            
            },
            {label: 'Entertainment',
            data: monthlyEntertainment,
            backgroundColor: '#7149C6',
           
            },
            {label: 'Housing',
            data: monthlyHousing,
            backgroundColor: '#40DFEF',
            
            },
            {label: 'Utilities' ,
            data: monthlyUtilities,
            backgroundColor: '#FF74B1',
            
            },
            {label: 'Insurance',
            data: monthlyInsurance,
            backgroundColor: '#FFEA20',
            
            }
        ],  
      };

    

    return (
        <div className="monthly-summary">
            <Bar data={data} options={options}/>
        </div>
    )
}

export default MonthlySummary;