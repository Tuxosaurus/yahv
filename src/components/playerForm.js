import React from "react";

import { CharacterSelector } from "./characterSelector.js";
import { MoveSelector } from "./moveSelector.js";

export const PlayerForm = ({ playerId }) => {
  return (
    <div className={`PlayerForm PlayerForm-${playerId}`}>
      <CharacterSelector playerId={playerId} />
      <MoveSelector playerId={playerId} />
    </div>
  );
};
