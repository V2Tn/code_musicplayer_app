import { Box, Container } from "@mui/material";
import React from "react";
import Controller from "./components/Controller";
import TrackList from "./components/TrackList";
import { MusicPlayerProvider } from "./context/MusicPlayerContext";

const App = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        p: 3,
      }}
      maxWidth="lg"
    >
      <Box
        sx={{
          width: 600,
          height: 600,
          border: "1px solid",
          borderRadius: 10,
          padding: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MusicPlayerProvider>
          <TrackList />
          <Controller />
        </MusicPlayerProvider>
      </Box>
    </Container>
  );
};

export default App;
