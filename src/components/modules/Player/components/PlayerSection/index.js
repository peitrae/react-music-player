import React from "react";

import miliToMinutesSeconds from "../../../../../utils/miliToMinutesSeconds";

import Card from "../../../../layouts/Card";
import Text from "../../../../typographies/Text";
import Album from "./components/Album";
import Title from "./components/Title";
import {
  ToggleExpandButton,
  ControlWrapper,
  TimeWrapper,
  Progress,
} from "./styles";

import ShuffleIcon from "../../../../icons/ShuffleIcon";
import PreviousIcon from "../../../../icons/PreviousIcon";
import PlayIcon from "../../../../icons/PlayIcon";
import PauseIcon from "../../../../icons/PauseIcon";
import NextIcon from "../../../../icons/NextIcon";
import RepeatIcon from "../../../../icons/RepeatIcon";
import ArrowIcon from "../../../../icons/ArrowIcon";
import ControlButton from "./components/ControlButton";
import BadgeButton from "./components/BadgeButton";

const PlayerSection = ({
  player: {
    track,
    progressMs,
    repeat,
    isPlaying,
    isExpand,
    isShuffle,
    isLoading,
  },
  toggleExpandHandler,
  playHandler,
  pauseHandler,
  nextHandler,
  previousHandler,
  progressChangeHandler,
  seekHandler,
  toggleShuffleHandler,
  setRepeatHandler,
}) => (
  <Card>
    <Album
      img={track.image}
      isExpand={isExpand}
      toggleExpandHandler={toggleExpandHandler}
    />
    {!isExpand && (
      <ToggleExpandButton onClick={toggleExpandHandler}>
        <ArrowIcon rotate={180} />
      </ToggleExpandButton>
    )}
    <Title>{track.name}</Title>
    <Text size="sm">
      {track.artists.map((artist) => artist.name).join(", ")}
    </Text>
    <ControlWrapper>
      <BadgeButton isActive={isShuffle} onClick={toggleShuffleHandler}>
        <ShuffleIcon />
      </BadgeButton>
      <ControlButton onClick={previousHandler}>
        <PreviousIcon />
      </ControlButton>
      {isPlaying ? (
        <ControlButton variant="outlined" size="md" onClick={pauseHandler}>
          <PauseIcon />
        </ControlButton>
      ) : (
        <ControlButton variant="outlined" size="md" onClick={playHandler}>
          <PlayIcon />
        </ControlButton>
      )}
      <ControlButton onClick={nextHandler}>
        <NextIcon />
      </ControlButton>
      <BadgeButton
        isActive={repeat}
        badge={repeat === 2 && "1"}
        onClick={setRepeatHandler}
      >
        <RepeatIcon />
      </BadgeButton>
    </ControlWrapper>
    <TimeWrapper>
      <Text size="xs">{miliToMinutesSeconds(progressMs)}</Text>
      <Text size="xs">{miliToMinutesSeconds(track.durationMs)}</Text>
    </TimeWrapper>
    <Progress
      value={(progressMs / track.durationMs) * 100 || 0}
      onChange={progressChangeHandler}
      onMouseUp={seekHandler}
    />
  </Card>
);

export default PlayerSection;
