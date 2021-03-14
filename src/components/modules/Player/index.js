import React, { useState } from "react";
import useSpotify from "../../../hooks/useSpotify";

import { getInitialPlayer, playTrack } from "../../../utils/api/spotify";
import { getToken } from "../../../utils/inMemoryToken";
import useTimeout from "../../../hooks/useTimeout";

import PlayerLoading from "./components/PlayerLoading";
import PlayerNotActive from "./components/PlayerNotActive";
import PlayerSection from "./components/PlayerSection";

const Player = () => {
  const { token } = getToken();

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
    isNotActive: false,
  });

  const {
    deviceId,
    track,
    progressMs,
    isExpand,
    isLoading,
    isNotActive,
    isPlaying
  } = player;

  const onPlayerReady = ({ device_id }) => {
    getInitialPlayer(token)
      .then((data) => {
        setPlayer({
          ...player,
          ...data,
          deviceId: device_id,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onPlayerChanged = (state) => {
    if (state) {
      const {
        track_window: { current_track, next_tracks, previous_tracks },
        repeat_mode,
        shuffle,
      } = state;

      setPlayer((player) => ({
        ...player,
        track: {
          id: current_track.id,
          image: current_track.album.images[0].url,
          artists: current_track.artists,
          name: current_track.name,
          uri: current_track.uri,
          durationMs: state.duration,
        },
        nextTracks: next_tracks,
        previousTracks: previous_tracks,
        progressMs: state.position,
        repeat: repeat_mode,
        isPlaying: !state.paused,
        isShuffle: shuffle,
      }));
    }
  };

  useSpotify({ token, onPlayerReady, onPlayerChanged });

  const progressTimeout = () => {
    if (progressMs <= track.durationMs && isPlaying) {
      setPlayer({ ...player, progressMs: progressMs + 1000 });
    }
  };

  useTimeout(1000, progressTimeout, [progressMs, track, isPlaying]);

  const toggleExpandHandler = () => {
    setPlayer({ ...player, isExpand: !isExpand });
  };

  const playHandler = () => {
    playTrack(token, deviceId, track.uri, progressMs);
  };

  const pauseHandler = () => setPlayer({ ...player, isPlaying: false });

  const progressChangeHandler = (e) => {
    const newProgress = Math.floor((track.durationMs * e.target.value) / 100);
    setPlayer({ ...player, progressMs: newProgress });
  };

  return isNotActive ? (
    <PlayerNotActive />
  ) : isLoading ? (
    <PlayerLoading />
  ) : (
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
