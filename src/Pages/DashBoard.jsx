import React from "react";
import Dashboard from "../components/Dashboard";
import NavBar from "../components/NavBar";
import Summary from "../components/Summary";

export default function DashBoard() {
  return (
    <>
      <NavBar ShowSecondNavBar={true} />
      <Summary />
      <Dashboard />
    </>
  );
}
