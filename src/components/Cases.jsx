import React from "react";
import CaseCard from "./CaseCard";
import { Grid } from "@mui/material";
import { useContext } from "react";
import SearchContext from "../context/Query/SearchContext";

export default function Cases() {
  const { cases } = useContext(SearchContext);
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {cases.map((Case, index) => (
        <Grid item={true} xs={2} sm={4} md={4} key={index}>
          <CaseCard key={index} item={Case} />
        </Grid>
      ))}
    </Grid>
  );
}
