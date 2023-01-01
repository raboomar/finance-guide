import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";
import "./reansactionCars.css";
const BarChart = ({ dataSet }) => {
  const [expenseChart, setExpenseChart] = useState({
    labels: dataSet.map((data) => data.category_name),
    datasets: [
      {
        label: "Total",
        data: dataSet.map((data) => data.total),
      },
    ],
  });

  return (
    <div className="doughnut-chart">
      <Doughnut data={expenseChart} />
    </div>
  );
};

export default BarChart;
