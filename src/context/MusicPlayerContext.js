import React, { useState, createContext } from "react";
import Track1 from "../mp3/track1.mp3";
import Track2 from "../mp3/track2.mp3";
import Track3 from "../mp3/track3.mp3";
import Img1 from "../img/img1.webp";
import Img2 from "../img/img2.webp";
import Img3 from "../img/img3.webp";

const MusicPlayerContext = createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "In Slow Motion (Inspiring Ambient Lounge)",
      file: Track1,
      image: Img1,
    },
    {
      name: "AMALGAM",
      file: Track2,
      image: Img2,
    },
    {
      name: "No Place To Go",
      file: Track3,
      image: Img3,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
