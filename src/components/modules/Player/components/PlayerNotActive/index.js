import React from "react";

import Card from "../../../../layouts/Card";
import { ErrorMessage, PlayButton } from "./styles";

const PlayerNotActive = ({ transferHandler }) => (
  <Card>
    <ErrorMessage size="sm">You listening on another device.</ErrorMessage>
    <ErrorMessage size="sm" weight="bold">
      Click play to listen on Songbird instead.
    </ErrorMessage>
    <PlayButton onClick={transferHandler}>Play</PlayButton>
  </Card>
);

export default PlayerNotActive;
