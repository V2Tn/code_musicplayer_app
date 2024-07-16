import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import useMusicPlayer from "../hooks/usePlayerProvider";

export default function Controller() {
  const theme = useTheme();
  const {
    image,
    currentTrackName,
    currentTrackIndex,
    isPlaying,
    playTrack,
    playPreviousTrack,
    playNextTrack,
  } = useMusicPlayer();

  const handleTogglePlay = () => {
    if (currentTrackIndex !== null) {
      playTrack(currentTrackIndex);
    } else {
      playTrack(0);
    }
  };

  const handlePlayPreviousTrack = () => {
    playPreviousTrack();
  };

  const handlePlayNextTrack = () => {
    playNextTrack();
  };

  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        width: 500,
        height: 200,
        border: "1px solid black",
        borderRadius: "40px",
        boxShadow: "10",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <CardContent
          sx={{
            flex: "1 0 auto",
            width: "100%",
            borderBottom: "none",
          }}
        >
          <Typography
            component="div"
            variant="h5"
            noWrap={false}
            sx={{
              width: "100%",
              overflowWrap: "break-word",
              wordWrap: "break-word",
            }}
          >
            {currentTrackName}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            pl: 1,
            pb: 1,
            justifyContent: "center",
          }}
        >
          <IconButton aria-label="previous" onClick={handlePlayPreviousTrack}>
            {theme.direction === "rtl" ? (
              <SkipNextIcon />
            ) : (
              <SkipPreviousIcon />
            )}
          </IconButton>

          <IconButton aria-label="play/pause" onClick={handleTogglePlay}>
            {isPlaying ? (
              <PauseIcon sx={{ height: 38, width: 38 }} />
            ) : (
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            )}
          </IconButton>

          <IconButton aria-label="next" onClick={handlePlayNextTrack}>
            {theme.direction === "rtl" ? (
              <SkipPreviousIcon />
            ) : (
              <SkipNextIcon />
            )}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 300, borderRadius: 10 }}
        image={image}
        alt="Live from space album cover"
      />
    </Card>
  );
}
