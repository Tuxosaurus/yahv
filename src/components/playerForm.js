import React, { useContext } from "react";

import { CharacterSelector } from "./characterSelector.js";
import { MoveSelector } from "./moveSelector.js";
import { store } from "./store.js";

import "../styles/playerForm.css";

function getPortrait(characterSlug) {
  const img =
    characterSlug !== "-"
      ? require(`../assets/images/${characterSlug}/${characterSlug}_portrait.png`)
      : null;

  if (!img) {
    return null;
  }

  return img.default;
}

export const PlayerForm = ({ playerId }) => {
  const globalState = useContext(store);
  const { state } = globalState;
  const characterSlug = state[playerId].selectedCharacterSlug;
  const hasCharacterSlug = characterSlug !== "-";
  const portrait = hasCharacterSlug ? getPortrait(characterSlug) : null;
  const isMediaLarge = window.innerWidth >= 800;
  const isP1 = playerId === "p1";

  return (
    <form className={`PlayerForm PlayerForm-${playerId}`}>
      <h2 className="title">
        <span>{playerId.toUpperCase()}</span>
      </h2>
      {hasCharacterSlug && isMediaLarge && (
        <img
          src={portrait}
          className={isP1 ? "mirror" : ""}
          width="128"
          height="112"
          alt=""
        />
      )}
      <CharacterSelector playerId={playerId} />
      {hasCharacterSlug && <MoveSelector playerId={playerId} />}
    </form>
  );
};
