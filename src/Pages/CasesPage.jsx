import { Box } from "@mui/system";
import React from "react";
import Cases from "../components/Cases";
import SearchBar from "../components/SearchBar";
import NavBar from "../components/NavBar";
import FilterProvider from "../context/Query/SearchStates";
export default function CasePage() {
  return (
    <FilterProvider>
      <div>
        <NavBar ShowSecondNavBar={false} />

        <Box sx={{ mt: "15vh", px: 3 }}>
          <SearchBar />
          <Cases />
        </Box>
      </div>
    </FilterProvider>
  );
}
