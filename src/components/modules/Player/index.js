import React, { useState } from "react";
import useSpotify from "../../../hooks/useSpotify";

import {
  transferUserPlayback,
  playTrack,
  pauseTrack,
  nextTrack,
  previousTrack,
  seekPositionTrack,
  toggleShuffle,
  setRepeatMode,
} from "../../../utils/api/spotify";
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
    nextTracks,
    prevTracks,
    repeat,
    progressMs,
    isShuffle,
    isExpand,
    isLoading,
    isNotActive,
    isPlaying,
  } = player;

  const onPlayerReady = ({ device_id }) => {
    transferUserPlayback(token, [device_id]).then(() => {
      setPlayer({
        ...player,
        deviceId: device_id,
        isLoading: false,
      });
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

  const pauseHandler = () => pauseTrack(token, deviceId);

  const nextHandler = () => {
    if (nextTracks.length) {
      nextTrack(token, deviceId);
    } else {
      seekPositionTrack(token, deviceId);
    }
  };

  const previousHandler = () => {
    if (prevTracks.length) {
      previousTrack(token, deviceId);
    } else {
      seekPositionTrack(token, deviceId);
    }
  };

  const seekHandler = () => {
    seekPositionTrack(token, deviceId, progressMs);
  };

  const toggleShuffleHandler = () => {
    toggleShuffle(token, deviceId, !isShuffle);
  };

  const setRepeatHandler = () => {
    const nextState = {
      0: "context",
      1: "track",
      2: "off",
    };

    setRepeatMode(token, deviceId, nextState[repeat]);
  };

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
      nextHandler={nextHandler}
      previousHandler={previousHandler}
      seekHandler={seekHandler}
      toggleShuffleHandler={toggleShuffleHandler}
      setRepeatHandler={setRepeatHandler}
    />
  );
};

export default Player;
