import React, { useContext } from "react";

import { Combobox } from "./combobox.js";
import { store } from "./store.js";
import {
  getCharacterDataFromCharacterSlug,
  getMoveDataFromMoveSlug,
} from "../data/utils";

const transfromSlugIntoLabel = (slug) => {
  const slugWithSpaces = slug.replaceAll("_", " ").replaceAll("-", " ");

  return slugWithSpaces.charAt(0).toUpperCase() + slugWithSpaces.slice(1);
};

const rewriteWithPreferredNotation = (moveName, notation) => {
  if (notation === "usa") {
    if (moveName.indexOf("(jab)") !== -1) {
      return moveName.replace("LP (jab)", "JAB");
    }
    if (moveName.indexOf("(strong)") !== -1) {
      return moveName.replace("MP (strong)", "STRONG");
    }
    if (moveName.indexOf("(fierce)") !== -1) {
      return moveName.replace("HP (fierce)", "FIERCE");
    }
    if (moveName.indexOf("(short)") !== -1) {
      return moveName.replace("LK (short)", "SHORT");
    }
    if (moveName.indexOf("(forward)") !== -1) {
      return moveName.replace("MK (forward)", "FORWARD");
    }
    if (moveName.indexOf("(roundhouse)") !== -1) {
      return moveName.replace("HK (roundhouse)", "ROUNDHOUSE");
    }
  }

  if (notation === "therightway") {
    if (moveName.indexOf("(jab)") !== -1) {
      return moveName.replace(" (jab)", "");
    }
    if (moveName.indexOf("(strong)") !== -1) {
      return moveName.replace(" (strong)", "");
    }
    if (moveName.indexOf("(fierce)") !== -1) {
      return moveName.replace(" (fierce)", "");
    }
    if (moveName.indexOf("(short)") !== -1) {
      return moveName.replace(" (short)", "");
    }
    if (moveName.indexOf("(forward)") !== -1) {
      return moveName.replace(" (forward)", "");
    }
    if (moveName.indexOf("(roundhouse)") !== -1) {
      return moveName.replace(" (roundhouse)", "");
    }
  }

  return moveName;
};

const filterSearched = (string, searched) => {
  let completeName = string;

  // TODO should "kick" apply to Chun's super?
  // TODO should identify throws
  if (completeName.match(/(LP|MP|HP)/g)) {
    completeName += " punch";
  } else if (completeName.match(/(LK|MK|HK)/g)) {
    completeName += " kick";
  }

  return completeName.toLowerCase().match(searched);
};

const renderMoveData = (moveData) => (
  <ul className="MoveSelector-data">
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
  const notation = state.notation;
  const characterSlug = state[playerId].selectedCharacterSlug;

  if (characterSlug === "-") {
    return null;
  }

  const characterData = getCharacterDataFromCharacterSlug(characterSlug);
  const moveSlug = state[playerId].selectedMoveSlug;
  const moveData = getMoveDataFromMoveSlug(moveSlug);

  function selectOption(moveSlug) {
    dispatch({
      type: "moveSlugChange",
      payload: {
        playerId: playerId,
        selectedMoveSlug: moveSlug,
      },
    });
  }

  const getAllListItems = () => {
    return getListItems(characterData.movements)
      .concat(getListItems(characterData.normals))
      .concat(getListItems(characterData.specials));
  };

  const getListItems = (moveset) => {
    //  [{
    //    key: "",
    //    groupName: "",
    //    options: [{
    //      slug: "",
    //      name: "",
    //      preferredName: "",
    //    }]
    //  }]
    if (!moveset) {
      return [];
    }

    return Object.entries(moveset).map((moves) => ({
      key: `${characterSlug}-${moves[0]}`,
      groupName: transfromSlugIntoLabel(moves[0]),
      options: Object.entries(moves[1]).map((move) => ({
        slug: move[1].slug,
        name: move[1].name,
        preferredName: rewriteWithPreferredNotation(move[1].name, notation),
      })),
    }));
  };

  return (
    <div className="MoveSelector">
      <h3 className="title">
        <span>Moves</span>
      </h3>

      <Combobox
        purpose="moves"
        listItems={getAllListItems()}
        playerId={playerId}
        alreadySelectedItem={{
          name:
            moveData && rewriteWithPreferredNotation(moveData.name, notation),
          slug: moveData && moveSlug,
        }}
        filterSearched={filterSearched}
        selectOption={selectOption}
      />
      {moveData && renderMoveData(moveData)}
    </div>
  );
};
