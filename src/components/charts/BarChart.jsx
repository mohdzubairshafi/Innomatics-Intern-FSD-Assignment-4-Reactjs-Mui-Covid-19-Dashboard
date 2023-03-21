import React, { useContext } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import SearchContext from "../../context/Query/SearchContext";
import { useTheme } from "@mui/material/styles";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
export default function BarChart() {
  const { chartData, chartLabels, SearchKey } = useContext(SearchContext);
  const theme = useTheme();
  const BGcolor =
    theme.palette.mode === "light"
      ? [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ]
      : [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ];
  const BorderColor =
    theme.palette.mode === "light"
      ? [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ]
      : [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Case-by-State Analysis",
        align: "left",
        color: theme.palette.mode === "light" ? theme.palette.primary.main : "#1de9b6",
        font: {
          size: 28,
        },
      },
      labels: {
        color: theme.palette.text.primary,
      },
    },
    scales: {
      y: {
        ticks: {
          color: theme.palette.text.primary,
          beginAtZero: true,
        },
      },
      x: {
        ticks: {
          color: theme.palette.text.primary,
          beginAtZero: true,
        },
      },
    },
  };

  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: SearchKey,
        data: chartData,
        backgroundColor: BGcolor,
        borderColor: BorderColor,
      },
    ],
  };

  return (
    <>
      <Bar options={options} data={data} width='100%' height='30vh' />
    </>
  );
}
