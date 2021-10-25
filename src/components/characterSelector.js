import React, { useContext } from "react";

import { Combobox } from "./combobox";
import { store } from "./store.js";
import {
  characterList,
  getCharacterFromCharacterSlug,
  getPortrait,
} from "../data/characterList";
import { transfromSlugIntoLabel } from "../data/utils";

import "../styles/characterSelector.css";

const getFilteredName = (option) => {
  let completeName = `${option.name}-${option.slug}`;

  if (completeName.match(/(Old)/g)) {
    completeName += " super";
  } else {
    completeName += " new";
  }

  return completeName;
};

export const CharacterSelector = ({ playerId, listItems }) => {
  const globalState = useContext(store);
  const { dispatch, state } = globalState;
  const characterSlug = state[playerId].selectedCharacterSlug;
  const hasCharacterSlug = characterSlug && characterSlug !== "-";
  const character = hasCharacterSlug
    ? getCharacterFromCharacterSlug(characterSlug)
    : null;
  const portrait = hasCharacterSlug ? getPortrait(characterSlug) : null;
  const isMediaLarge = window.innerWidth >= 800;
  const isP1 = playerId === "p1";

  const getListItems = () => {
    //  [{
    //    key: "new",
    //    groupName: "New",
    //    options: [{
    //      slug: "ryu",
    //      name: "Ryu",
    //    }]
    //  }]
    return Object.entries(characterList).map((group) => ({
      key: `${group[0]}`,
      groupName: transfromSlugIntoLabel(group[0]),
      options: group[1].map((character) => ({
        slug: character.slug,
        name: character.name,
      })),
    }));
  };

  function selectOption(characterSlug) {
    dispatch({
      type: "characterSlugChange",
      payload: {
        playerId: playerId,
        selectedCharacterSlug: characterSlug,
      },
    });
  }

  return (
    <div className={`CharacterSelector CharacterSelector-${playerId}`}>
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

      <Combobox
        purpose="characters"
        placeholder="Select/Type a character"
        listItems={getListItems()}
        playerId={playerId}
        alreadySelectedItem={character}
        filteredName={getFilteredName}
        selectOption={selectOption}
      />
    </div>
  );
};
