import SearchContext from "./SearchContext";
import { useEffect, useState } from "react";
import axios from "axios";
const FilterProvider = ({ children }) => {
  const [CasesLimit, setCasesLimit] = useState(10);
  const [Cases, setCases] = useState([]);
  const [chartLabels, setChartLabels] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [CaseTags, setCaseTags] = useState(Object.keys({}));
  const [SearchKey, setSearchKey] = useState("loc");
  const [SummaryReport, setSummaryReport] = useState({});
  useEffect(() => {
    getCases();
    getChartData("loc");
  }, [CasesLimit]);

  async function getCases() {
    await axios
      .get("https://api.rootnet.in/covid19-in/stats/latest")
      .then(function (response) {
        const Cases = response.data.data.regional;
        const Summary = response.data.data.summary;
        delete Summary.loc;
        delete Summary.confirmedButLocationUnidentified;
        setSummaryReport(Summary);

        setCases(() => {
          return Cases.slice(0, CasesLimit);
        });
        const FilteredKey = Object.keys(Cases[0]);
        const updateChartLabels = Cases.map((obj) => {
          return obj["loc"];
        });
        setChartLabels(updateChartLabels);
        setCaseTags(FilteredKey);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  function getChartData(key) {
    setSearchKey(key);
    const updateChartLabels = Cases.map((obj) => {
      return obj["loc"];
    });
    setChartLabels(updateChartLabels);
    const updateChartData = Cases.map((obj) => {
      return obj[key];
    });
    setChartData(updateChartData);
  }

  // filter functions
  const filterCases = (query) => {
    if (query.key === undefined || query.value === undefined) {
      return Cases;
    } else if (query.key === "" || query.value === "") {
      return Cases;
    } else {
      const filterCases = Cases.filter((post) => {
        return post[query.key] === query.value;
      }).slice(0, CasesLimit);
      setCases(filterCases);
    }
  };

  const initialState = {
    cases: Cases,
  };

  return (
    <SearchContext.Provider
      value={{
        ...initialState,
        CasesLimit,
        getCases,
        setCasesLimit,
        filterCases,
        chartLabels,
        chartData,
        getChartData,
        CaseTags,
        SearchKey,
        SummaryReport,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default FilterProvider;
