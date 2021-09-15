import React, { useContext } from "react";

import { store } from "./store.js";
import { getMoveDataFromMoveSlug } from "../data/utils";

function renderMoveStepsList(moveData, stepNumber) {
  return Object.entries(moveData.steps).map((steps, index) => {
    const number = ++steps[0];
    const key = `${moveData.slug}|${index}`;
    const status = steps[1].status ? ` (${steps[1].status})` : "";
    const label = `#${number}/ ${steps[1].frames}fr${status}`;

    return (
      <option
        key={key}
        value={index}
        className={stepNumber === index ? "selected" : ""}
      >
        {label}
      </option>
    );
  });
}

function getFirstStepNumberFromStatus(status, moveData) {
  return Object.entries(moveData.steps).findIndex(
    (steps) => steps[1].status === status
  );
}

export const StepSelector = ({ playerId }) => {
  const globalState = useContext(store);
  const { dispatch, state } = globalState;
  const playerState = state[playerId];

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

  const selectedStepNumber = Number(playerState.selectedStepNumber);
  const selectedMoveData = getMoveDataFromMoveSlug(selectedMoveSlug);

  if (!selectedMoveData) {
    return emptyStepSelectorP1;
  }

  const totalStepsNumber = selectedMoveData.steps.length - 1;
  const previousStepNumber =
    selectedStepNumber > 0 ? selectedStepNumber - 1 : 0;
  const nextStepNumber =
    selectedStepNumber < totalStepsNumber ? selectedStepNumber + 1 : 0;

  const firstStartupStep = getFirstStepNumberFromStatus(
    "startup",
    selectedMoveData
  );
  const firstActiveStep = getFirstStepNumberFromStatus(
    "active",
    selectedMoveData
  );
  const firstRecoveryStep = getFirstStepNumberFromStatus(
    "recovery",
    selectedMoveData
  );

  return (
    <div className={`StepSelector StepSelector-${playerId}`}>
      <h3 className="title">
        <span>Steps</span>
      </h3>
      {selectedStepNumber !== "undefined" && (
        <select value={selectedStepNumber} onChange={handleSelectedStepChange}>
          {renderMoveStepsList(selectedMoveData, selectedStepNumber)}
        </select>
      )}
      <div className="step-controls">
        <span className="shortcuts">
          <button
            value={firstStartupStep}
            onClick={handleSelectedStepChange}
            title="Go to first statup step"
            disabled={firstStartupStep === -1}
          >
            Startup
          </button>
          <button
            value={firstActiveStep}
            onClick={handleSelectedStepChange}
            title="Go to first active step"
            disabled={firstActiveStep === -1}
          >
            Active
          </button>
          <button
            value={firstRecoveryStep}
            onClick={handleSelectedStepChange}
            title="Go to first recovery step"
            disabled={firstRecoveryStep === -1}
          >
            Recovery
          </button>
        </span>
        <span className="arrows">
          <button
            value={previousStepNumber}
            onClick={handleSelectedStepChange}
            disabled={selectedStepNumber === 0}
          >
            &#129032;
          </button>
          <button
            value={nextStepNumber}
            onClick={handleSelectedStepChange}
            disabled={selectedStepNumber === totalStepsNumber}
          >
            &#129034;
          </button>
        </span>
      </div>
    </div>
  );
};
