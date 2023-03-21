import { useState, useContext } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import SearchContext from "./../context/Query/SearchContext";

export default function SearchBar() {
  const { CasesLimit, setCasesLimit, filterCases, getCases, chartLabels } = useContext(SearchContext);

  const [TagValue, setTagValue] = useState(chartLabels);
  const [inputTagOptionValue, setInputTagOptionValue] = useState("");

  const handleChange = (event) => {
    if (event.target.value) setCasesLimit(event.target.value);
    else setCasesLimit(10);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const query = {
      key: "loc",
      value: TagValue,
    };
    filterCases(query);
  };
  return (
    <div
      style={{
        display: "flex",
        alignSelf: "center",
        justifyContent: "start",
        flexDirection: "row",
        padding: 20,
      }}
    >
      <FormControl sx={{ minWidth: 120 }} size='small'>
        <InputLabel size='small' id='demo-select-small'>
          No of Cases
        </InputLabel>
        <Select
          size='small'
          labelId='demo-select-small'
          id='demo-select-small'
          value={CasesLimit}
          label='No of Cases'
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
          <MenuItem value={36}>all</MenuItem>
        </Select>
      </FormControl>
      <form onSubmit={handleSearch} style={{ display: "flex" }}>
        <div></div>
        <div>
          <Autocomplete
            value={TagValue}
            onChange={(event, newValue) => {
              setTagValue(newValue);
            }}
            getOptionLabel={(option) => option.toString()}
            inputValue={inputTagOptionValue}
            onInputChange={(event, newInputValue) => {
              setInputTagOptionValue(newInputValue);
            }}
            size='small'
            options={chartLabels}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label='Select State' />}
          />
        </div>
        <IconButton size='medium' type='submit' aria-label='search'>
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
        <Button
          sx={{ ml: 4, color: "text.primary" }}
          onClick={() => {
            getCases(10);
          }}
          variant='outlined'
          size='small'
        >
          Reset
        </Button>
      </form>
    </div>
  );
}
