import React, { useContext } from "react";

import { Combobox } from "./combobox.js";
import { store } from "./store.js";

import "../styles/stepSelector.css";

export const StepSelector = ({ playerId }) => {
  const globalState = useContext(store);
  const { dispatch, state } = globalState;
  const playerState = state[playerId];

  function selectOption(stepNumber) {
    dispatch({
      type: "stepNumberChange",
      payload: {
        playerId: playerId,
        selectedStepNumber: stepNumber,
      },
    });
  }

  function handleSelectedStepChange(event) {
    dispatch({
      type: "stepNumberChange",
      payload: {
        playerId: playerId,
        selectedStepNumber: event.target.value,
      },
    });
  }

  const selectedMoveSlug = playerState.selectedMoveSlug;
  const emptyStepSelectorP1 = (
    <div className="StepSelector StepSelector-p1"></div>
  );

  if (selectedMoveSlug === "") {
    return emptyStepSelectorP1;
  }

  const moveData = playerState.selectedMoveData;

  if (!moveData) {
    return emptyStepSelectorP1;
  }

  const selectedStepNumber = Number(playerState.selectedStepNumber);
  const maxStepNumber = moveData.totalSteps - 1;
  const previousStepNumber =
    selectedStepNumber > 0 ? selectedStepNumber - 1 : 0;
  const nextStepNumber =
    selectedStepNumber < maxStepNumber ? selectedStepNumber + 1 : 0;

  return (
    <div className={`StepSelector StepSelector-${playerId}`}>
      <h3 className="title">
        <span>Steps</span>
      </h3>

      {moveData && (
        <Combobox
          purpose="steps"
          placeholder="Select/Type a move"
          listItems={moveData.comboboxSteps}
          playerId={playerId}
          alreadySelectedItem={moveData?.onlySteps[selectedStepNumber]}
          selectOption={selectOption}
        />
      )}

      <div className="step-controls">
        <span className="shortcuts">
          <button
            value={moveData.firstOfGroup?.startup}
            onClick={handleSelectedStepChange}
            aria-label="Go to first statup step"
            disabled={moveData.firstOfGroup?.startup === undefined}
          >
            Startup
          </button>
          <button
            value={moveData.firstOfGroup?.active}
            onClick={handleSelectedStepChange}
            aria-label="Go to first active step"
            disabled={moveData.firstOfGroup?.active === undefined}
          >
            Active
          </button>
          <button
            value={moveData.firstOfGroup?.recovery}
            onClick={handleSelectedStepChange}
            aria-label="Go to first recovery step"
            disabled={moveData.firstOfGroup?.recovery === undefined}
          >
            Recovery
          </button>
        </span>
        <span className="arrows">
          <button
            value={previousStepNumber}
            onClick={handleSelectedStepChange}
            disabled={selectedStepNumber === 0}
            className="previous mirror"
            aria-label={`Previous step ${
              playerId === "p1" ? "[SHIFT+LEFT]" : "[SHIFT+UP]"
            }`}
          />
          <button
            value={nextStepNumber}
            onClick={handleSelectedStepChange}
            disabled={selectedStepNumber === maxStepNumber}
            className="next"
            aria-label={`Next step ${
              playerId === "p1" ? "[SHIFT+RIGHT]" : "[SHIFT+DOWN]"
            }`}
          />
        </span>
      </div>
    </div>
  );
};
