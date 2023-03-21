import React from "react";
import { Box, Card, Typography } from "@mui/material";

export default function CasesCard({ item }) {
  const Details = {
    paddingBottom: "0.25rem",
    paddingLeft: " 0.25rem",
    paddingRight: "0.25rem",
    color: "text.disabled",
    fontSize: "0.695rem",
    mt: 0.5,
  };

  return (
    <>
      <Box>
        <Card
          sx={{
            overflow: "hidden",
            maxWidth: "34rem",
            borderRadius: "0.75rem",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Box
            sx={{
              px: 3,
              pt: 2,
              pb: 2,
              display: "flex",
              flexWrap: "wrap",
            }}
          ></Box>
          <Box sx={{ px: 4, pt: 1, pb: 1 }}>
            <Box sx={{ mb: "0.5rem", fontSize: "1.35rem", lineHeight: "1.75rem", fontWeight: "700" }}>{item.loc}</Box>
          </Box>
          <Box
            sx={{
              px: 4,
              pt: 1,
              pb: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              textTransform: "capitalize",
              flexWrap: "wrap",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "capitalize",
                flexWrap: "wrap",
                width: "100%",
              }}
            ></Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "capitalize",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              {item.confirmedCasesIndian !== "" ? (
                <Typography sx={Details}>
                  <strong style={{ color: "text.secondary" }}> confirmed Cases Indian:</strong>{" "}
                  {item.confirmedCasesIndian}{" "}
                </Typography>
              ) : null}

              {item.discharged !== "" ? (
                <Typography sx={Details}>
                  {" "}
                  <strong style={{ color: "text.secondary" }}>discharged :</strong> {item.discharged}{" "}
                </Typography>
              ) : null}
              {item.deaths !== "" ? (
                <Typography sx={Details}>
                  {" "}
                  <strong style={{ color: "text.secondary" }}>deaths :</strong> {item.deaths}{" "}
                </Typography>
              ) : null}
              {item.totalConfirmed !== "" ? (
                <Typography sx={Details}>
                  {" "}
                  <strong style={{ color: "text.secondary" }}>total Confirmed :</strong> {item.totalConfirmed}{" "}
                </Typography>
              ) : null}
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
}
