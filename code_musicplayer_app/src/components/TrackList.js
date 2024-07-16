import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import GraphicEqSharpIcon from "@mui/icons-material/GraphicEqSharp";
import PauseCircleOutlineSharpIcon from "@mui/icons-material/PauseCircleOutlineSharp";

const TrackList = () => {
  const { trackList, currentTrackIndex, playTrack } = useMusicPlayer();

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      aria-label="contacts"
    >
      {trackList.map((track, index) => (
        <ListItem disablePadding>
          <ListItemButton
            key={index}
            onClick={() => {
              playTrack(index);
            }}
          >
            {currentTrackIndex === index ? (
              <GraphicEqSharpIcon />
            ) : (
              <PauseCircleOutlineSharpIcon />
            )}
            <ListItemText sx={{ marginLeft: "10px" }}>
              {track.name}
            </ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TrackList;
