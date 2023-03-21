import React from "react";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@mui/icons-material";
import { Card } from "@mui/material";
import { useTheme } from "@emotion/react";
import NavBar from "../components/NavBar";
export default function NotFound() {
  const theme = useTheme();
  return (
    <div className='hero'>
      <NavBar ShowSecondNavBar={false} />
      <Card
        bordered={false}
        style={{
          width: "100%",
          height: "80vh",
          fontSize: "1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <h1>Oops!...</h1>
          <p>404 - Page Not Found! </p>
          <Link
            to='/'
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              marginTop: "1rem",
              color: theme.palette.text.dark,
            }}
          >
            <HomeOutlined sx={{ color: theme.palette.text.dark }} /> Back To Home
          </Link>
        </div>
      </Card>
    </div>
  );
}
