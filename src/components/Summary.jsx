import React, { useContext } from "react";
import SearchContext from "../context/Query/SearchContext";
import { Card } from "@mui/material";
import Counter from "./Counter";

export default function Summary() {
  const { SummaryReport } = useContext(SearchContext);

  return (
    <Card
      sx={{
        p: 4,
        mt: 9,
        pb: 0,
        minHeight: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {Object.keys(SummaryReport).map((key, index) => (
        <Counter key={index} title={key} cases={SummaryReport[key]} />
      ))}
    </Card>
  );
}
