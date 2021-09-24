import React, { useContext } from "react";

import { store } from "./store.js";
import {
  getCharacterDataFromCharacterSlug,
  getMoveDataFromMoveSlug,
} from "../data/utils";

function transfromSlugIntoLabel(slug) {
  const slugWithSpaces = slug.replaceAll("_", " ").replaceAll("-", " ");

  return slugWithSpaces.charAt(0).toUpperCase() + slugWithSpaces.slice(1);
}

const renderMoveList = (characterSlug, moveList, moveSlug) =>
  Object.entries(moveList).map((moves) => (
    <optgroup
      label={transfromSlugIntoLabel(moves[0])}
      key={`${characterSlug}-${moves[0]}`}
    >
      {Object.entries(moves[1]).map((move) => (
        <option
          className={moveSlug === move[1].slug ? "selected" : ""}
          key={move[1].slug}
          value={move[1].slug}
        >
          {move[1].name}
        </option>
      ))}
    </optgroup>
  ));

const renderMoveData = (moveData) => (
  <ul>
    {Object.keys(moveData)
      .filter((moveKey) => !["name", "slug", "steps"].includes(moveKey))
      .map((moveKey) => {
        const key = `${moveData.slug}-${moveKey}`;
        const label = transfromSlugIntoLabel(moveKey);
        const moveValue = moveData[moveKey];

        return (
          <li key={key}>
            {`${label}: `}
            <span className="Move-figure">{moveValue}</span>
            {label === "Damage" && (
              <a
                href="https://srk.shib.live/w/Super_Street_Fighter_2_Turbo/Random_Damage"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Random damage explanations on SRK Wiki"
              >
                info
              </a>
            )}
            {label === "Chain cancel" && (
              <a
                href="https://srk.shib.live/w/Super_Street_Fighter_2_Turbo/Canceling_(ST)"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Canceling explanations on SRK Wiki"
              >
                info
              </a>
            )}
          </li>
        );
      })}
  </ul>
);

export const MoveSelector = ({ playerId }) => {
  const globalState = useContext(store);
  const { dispatch, state } = globalState;
  const characterSlug = state[playerId].selectedCharacterSlug;

  if (characterSlug === "-") {
    return null;
  }

  const characterData = getCharacterDataFromCharacterSlug(characterSlug);
  const moveSlug = state[playerId].selectedMoveSlug;
  const moveData = getMoveDataFromMoveSlug(moveSlug);

  function handleChange(event) {
    dispatch({
      type: "moveSlugChange",
      payload: {
        playerId: playerId,
        selectedMoveSlug: event.target.value,
      },
    });
  }

  return (
    <div className="MoveSelector">
      <label>
        <h3 className="title">
          <span>Moves</span>
        </h3>
        <select value={moveSlug} onChange={handleChange}>
          <option value="-">Select a move</option>
          {characterData.movements &&
            renderMoveList(characterSlug, characterData.movements, moveSlug)}
          {characterData.normals &&
            renderMoveList(characterSlug, characterData.normals, moveSlug)}
          {characterData.specials &&
            renderMoveList(characterSlug, characterData.specials, moveSlug)}
        </select>
      </label>
      {moveData && renderMoveData(moveData)}
    </div>
  );
};
