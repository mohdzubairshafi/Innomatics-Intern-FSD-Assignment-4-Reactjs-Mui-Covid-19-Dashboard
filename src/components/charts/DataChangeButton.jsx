import React, { useContext, useEffect, useState } from "react";
import { Autocomplete, Box, Button, FormControl, TextField } from "@mui/material";
import SearchContext from "../../context/Query/SearchContext";

export default function DataChangeButton() {
  const { cases, getChartData, getCases, setCasesLimit } = useContext(SearchContext);
  const [Limit, setLimit] = useState(10);
  const DataLength = Array.from({ length: 36 }, (_, i) => i + 1);

  const handleChange = (limit) => {
    setCasesLimit(limit);
    getCases();
    getChartData("totalConfirmed");
  };
  useEffect(() => {
    getChartData("totalConfirmed");
  }, [cases]);

  const mainTags = ["totalConfirmed", "confirmedCasesIndian", "confirmedCasesForeign", "discharged", "deaths"];
  const size = "inherit";
  return (
    <div>
      <Box
        sx={{
          height: "2.33rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {mainTags.map((tag) => {
          return (
            <Button
              key={tag}
              onClick={() => {
                getChartData(tag);
              }}
              variant='contained'
              sx={{ m: 1, height: size }}
            >
              {tag}
            </Button>
          );
        })}

        <FormControl size='small' sx={{ minWidth: 120, height: size }}>
          <Autocomplete
            options={DataLength}
            id='controlled-demo'
            value={Limit}
            size='small'
            getOptionLabel={(option) => option.toString()}
            sx={{ height: size, ml: 2, p: 0 }}
            onChange={(event, newValue) => {
              if (newValue > 2) {
                setLimit(newValue);
                handleChange(newValue);
              }
            }}
            renderInput={(params) => <TextField {...params} label='No Of Cases' />}
          />
        </FormControl>
      </Box>
    </div>
  );
}
