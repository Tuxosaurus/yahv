import React, { useContext } from "react";

import { store } from "./store.js";
import { characterList } from "../data/characterList";

export const CharacterSelector = ({ playerId }) => {
  const globalState = useContext(store);
  const { dispatch, state } = globalState;
  const characterSlug = state[playerId].selectedCharacterSlug;

  function handleChange(event) {
    const selected = event.target.value !== "-" ? event.target.value : "-";

    dispatch({
      type: "characterSlugChange",
      payload: {
        playerId: playerId,
        selectedCharacterSlug: selected,
      },
    });
  }

  return (
    <select
      className="CharacterSelector"
      value={characterSlug}
      onChange={handleChange}
    >
      <option value="-">Select your character</option>
      {characterList.map((character) => (
        <option
          className={characterSlug === character.slug ? "selected" : ""}
          key={character.slug}
          value={character.slug}
        >
          {character.name}
        </option>
      ))}
    </select>
  );
};
