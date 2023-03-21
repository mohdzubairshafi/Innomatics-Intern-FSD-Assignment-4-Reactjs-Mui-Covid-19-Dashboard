import React from "react";
import CountUp from "react-countup";
import { Card, Typography } from "@mui/material";
export default function Counter({ title, cases }) {
  return (
    <Card
      sx={{
        height: "180px",
        width: "250px",
        m: 1,
        bgcolor: "#D43434",
        color: "#fff",
        borderRadius: "7px",
        p: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "2rem",
        justifyContent: "center",
      }}
    >
      <CountUp end={cases} duration={2.5} />
      <Typography mt={2} sx={{ textTransform: "uppercase" }}>
        {" "}
        {title}
      </Typography>
    </Card>
  );
}
