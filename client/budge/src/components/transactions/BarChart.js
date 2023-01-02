import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useState } from "react";
import { currencyFormatter } from "../../utils/format";
import "./reansactionCars.css";
import { useEffect } from "react";
const BarChart = ({ dataSet }) => {
  const [totalSpent, setTotalSpent] = useState(0);
  const [expenseChart, setExpenseChart] = useState({
    labels: dataSet.map((data) => data.category_name),
    datasets: [
      {
        label: "Total",
        data: dataSet.map((data) => data.total),
      },
    ],
  });

  const total = () => {
    let totalAmount = 0;
    dataSet?.map((item) => {
      console.log();
      totalAmount += parseFloat(item.total);
    });
    setTotalSpent(totalAmount);
  };

  useEffect(() => {
    total();
  }, []);

  return (
    <div className="doughnut-chart">
      <h5 className="total-amount">{currencyFormatter.format(totalSpent)}</h5>
      <Doughnut data={expenseChart} />
    </div>
  );
};

export default BarChart;
