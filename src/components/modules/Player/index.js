import React, { useState } from "react";
import PlayerSection from "./components/PlayerSection";

const Player = () => {
  const [player, setPlayer] = useState({
    deviceId: "",
    track: {
      id: "",
      image: "./adhitia-sofyan-album.jpg",
      artists: [{ name: "Adhitia Sofyan" }],
      name: "Blue Sky Collapse",
      uri: "",
      durationMs: 290000,
    },
    progressMs: 0,
    nextTracks: [],
    prevTracks: [],
    repeat: 0,
    isPlaying: false,
    isShuffle: false,
    isExpand: true,
    isLoading: true,
  });

  const { isExpand, track } = player;

  const toggleExpandHandler = () => {
    setPlayer({ ...player, isExpand: !isExpand });
  };

  const playHandler = () => setPlayer({ ...player, isPlaying: true });

  const pauseHandler = () => setPlayer({ ...player, isPlaying: false });

  const progressChangeHandler = (e) => {
    const newProgress = Math.floor((track.durationMs * e.target.value) / 100);
    setPlayer({ ...player, progressMs: newProgress });
  };

  return (
    <PlayerSection
      player={player}
      toggleExpandHandler={toggleExpandHandler}
      playHandler={playHandler}
      pauseHandler={pauseHandler}
      progressChangeHandler={progressChangeHandler}
    />
  );
};

export default Player;
