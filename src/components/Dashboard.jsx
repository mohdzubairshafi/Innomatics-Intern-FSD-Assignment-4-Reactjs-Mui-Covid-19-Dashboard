import React, { useContext, useEffect } from "react";
import { Box, Card } from "@mui/material";
import BarChart from "./charts/BarChart";
import PieChart from "./charts/PieChart";
import PolarAreaChart from "./charts/PolarAreaChart";
import DoughnutChart from "./charts/DoughnutChart";
import RadarChart from "./charts/RadarChart";
import LineChart from "./charts/LineChart";
import SearchContext from "./../context/Query/SearchContext";

export default function Dashboard() {
  const { getChartData } = useContext(SearchContext);
  useEffect(() => {
    getChartData("totalConfirmed");
  }, []);
  const ChartContainer = {
    p: 2,
    mt: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-Box",
    width: "44rem",
    height: "38rem",
    borderRadius: "1.678rem",
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          padding: 3,
          margin: 1,
          justifyContent: "space-between",

          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Card sx={{ ...ChartContainer, width: "100vw" }}>
          <BarChart />
        </Card>
        <Card sx={{ ...ChartContainer, width: "100vw" }}>
          <LineChart />
        </Card>
        <Card sx={ChartContainer}>
          <PieChart />
        </Card>
        <Card sx={ChartContainer}>
          <PolarAreaChart />
        </Card>
        <Card sx={ChartContainer}>
          <DoughnutChart />
        </Card>
        <Card sx={ChartContainer}>
          <RadarChart />
        </Card>
      </Box>
    </>
  );
}
