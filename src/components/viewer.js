import React, { useContext, useRef } from "react";
import html2canvas from "html2canvas";
import Hotkeys from "react-hot-keys";

import { Canvas } from "./canvas.js";
import { Legend } from "./legend.js";
import { store, validBgs } from "./store.js";
import { StepSelector } from "./stepSelector.js";
import { getStepImageFilename } from "../data/utils";

import "../styles/viewer.css";

function retrieveStepImage(stepFilename) {
  const img = require(`../assets/images/${stepFilename}`);

  if (!img) {
    return null;
  }

  return img.default;
}

export const Viewer = () => {
  const globalState = useContext(store);
  const { dispatch, state } = globalState;
  const { p1, p2, background, zoom, cps2, scanlines } = state;
  const boardRef = useRef(null);

  function buildUrl() {
    let url = `?fwd=${state.forward}`;
    url += `&bg=${state.background}`;
    url += `&zoom=${state.zoom}`;
    if (cps2) {
      url += `&cps2=true`;
    }
    if (scanlines) {
      url += `&scanlines=true`;
    }
    if (p1.selectedMoveSlug !== "-") {
      url += `&p1=${p1.selectedMoveSlug}`;
      url += `-${p1.selectedStepNumber}`;
      url += `${p1.transparent ? "t" : ""}`;
      url += `${p1.mirror ? "m" : ""}`;
      if (p1.position) {
        url += `&p1xy=${p1.position.x},${p1.position.y}`;
      }
    }
    if (p2.selectedMoveSlug !== "-") {
      url += `&p2=${p2.selectedMoveSlug}`;
      url += `-${p2.selectedStepNumber}`;
      url += `${p2.transparent ? "t" : ""}`;
      url += `${p2.mirror ? "m" : ""}`;
      if (p2.position) {
        url += `&p2xy=${p2.position.x},${p2.position.y}`;
      }
    }

    return url;
  }

  function focusBoard() {
    // To make sure hotkeys are applied after clicking controls
    if (boardRef.current) {
      boardRef.current.focus();
    }
  }

  function handleZoomChange(event) {
    dispatch({ type: "zoomChange", payload: event.target.value });
    focusBoard();
  }

  function handleBackgroundChange(event) {
    dispatch({ type: "backgroundChange", payload: event.target.value });
    focusBoard();
  }

  function handleCps2Change() {
    dispatch({ type: "cps2Change" });
    focusBoard();
  }

  function handleScanlinesChange() {
    dispatch({ type: "scanlinesChange" });
    focusBoard();
  }

  // https://www.it-swarm-fr.com/fr/html2canvas/comment-enregistrer-limage-sur-lordinateur-local-de-lutilisateur-laide-de-html2canvas/1054259197/
  function download(uri, filename) {
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = uri;
      link.download = filename;

      //Firefox requires the link to be in the body
      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
    focusBoard();
  }

  function capture() {
    html2canvas(boardRef.current).then(function (canvas) {
      download(canvas.toDataURL(), `yahv${buildUrl()}.png`);
    });
    focusBoard();
  }

  function toggleModal(modalId) {
    dispatch({
      type: "modalChange",
      payload: state.modal === null ? modalId : null,
    });
  }

  function keyStepChange(keyName) {
    const targetPlayer =
      keyName.includes("left") || keyName.includes("right") ? "p1" : "p2";

    const currentMoveSlug = state[targetPlayer].selectedMoveSlug;
    if (currentMoveSlug === "-") {
      return null;
    }

    const currentMoveData = state[targetPlayer].selectedMoveData;
    const currentStepNumber = state[targetPlayer].selectedStepNumber;
    const targetNumber =
      keyName.includes("left") || keyName.includes("up")
        ? currentStepNumber > 0
          ? currentStepNumber - 1
          : 0
        : currentStepNumber < parseInt(currentMoveData.totalSteps) - 1
        ? currentStepNumber + 1
        : currentStepNumber;

    dispatch({
      type: "stepNumberChange",
      payload: {
        playerId: targetPlayer,
        selectedStepNumber: targetNumber,
      },
    });
  }

  function keyPixelMove(keyName) {
    const targetPlayer = keyName.includes("ctrl") ? "p1" : "p2";

    const currentPosition = state[targetPlayer].position;
    let newPosition = currentPosition;

    if (keyName.includes("left")) {
      newPosition.x = parseInt(newPosition.x) - 1;
    }
    if (keyName.includes("right")) {
      newPosition.x = parseInt(newPosition.x) + 1;
    }
    if (keyName.includes("up")) {
      newPosition.y = parseInt(newPosition.y) - 1;
    }
    if (keyName.includes("down")) {
      newPosition.y = parseInt(newPosition.y) + 1;
    }

    dispatch({
      type: "positionChange",
      payload: {
        playerId: targetPlayer,
        position: newPosition,
      },
    });
  }

  function handleKeyDown(keyName, event) {
    event.preventDefault();

    if (p1.selectedMoveSlug === "-" && p2.selectedMoveSlug === "-") {
      return null;
    }

    if (keyName.includes("shift")) {
      keyStepChange(keyName);
    } else if (keyName.includes("ctrl") || keyName.includes("alt")) {
      keyPixelMove(keyName);
    }
  }

  const stepFilenameP1 =
    p1.selectedMoveSlug !== "-"
      ? getStepImageFilename(
          p1.selectedCharacterSlug,
          p1.selectedMoveData.onlySteps[p1.selectedStepNumber]
        )
      : null;

  const stepFilenameP2 =
    p2.selectedMoveSlug !== "-"
      ? getStepImageFilename(
          p2.selectedCharacterSlug,
          p2.selectedMoveData.onlySteps[p2.selectedStepNumber]
        )
      : null;

  const stepImageP1 = stepFilenameP1 ? retrieveStepImage(stepFilenameP1) : null;
  const stepImageP2 = stepFilenameP2 ? retrieveStepImage(stepFilenameP2) : null;

  if (!stepImageP1 && !stepImageP2) {
    return null;
  }

  return (
    <Hotkeys
      keyName="shift+left,shift+right,shift+up,shift+down,ctrl+left,ctrl+right,ctrl+up,ctrl+down,alt+left,alt+right,alt+up,alt+down"
      filter={(event) => {
        if (event.target.id === "board") {
          return true;
        }

        return false;
      }}
      allowRepeat
      onKeyDown={handleKeyDown}
    >
      <div className="Viewer-controls">
        <StepSelector playerId="p1" />
        <StepSelector playerId="p2" />
      </div>
      <div className="Viewer">
        <div
          id="board"
          ref={boardRef}
          tabIndex="0"
          className={`board${scanlines ? " scanlines" : ""}`}
          style={{
            backgroundColor: validBgs[background],
          }}
        >
          {stepImageP1 && (
            <Canvas playerId="p1" image={stepImageP1} zoom={zoom} cps2={cps2} />
          )}
          {stepImageP2 && (
            <Canvas playerId="p2" image={stepImageP2} zoom={zoom} cps2={cps2} />
          )}
        </div>
        <Legend>
          <div className="board-controls">
            <span>
              <button
                value="0"
                onClick={handleBackgroundChange}
                disabled={Number(background) === 0}
              >
                Dark
              </button>
              <button
                value="1"
                onClick={handleBackgroundChange}
                disabled={Number(background) === 1}
              >
                Medium
              </button>
              <button
                value="2"
                onClick={handleBackgroundChange}
                disabled={Number(background) === 2}
              >
                Bright
              </button>
            </span>
            <span>
              <button
                value={1}
                onClick={handleZoomChange}
                disabled={Number(zoom) === 1}
              >
                X1
              </button>
              <button
                value={2}
                onClick={handleZoomChange}
                disabled={Number(zoom) === 2}
              >
                X2
              </button>
              <button
                value={3}
                onClick={handleZoomChange}
                disabled={Number(zoom) === 3}
              >
                X3
              </button>
            </span>
            <span className="separator">
              <button
                onClick={handleCps2Change}
                aria-label="Pixel ratio as seen on original hardware (approximation)"
              >
                CPS2 {cps2 ? "ON" : "OFF"}
              </button>
              <button
                onClick={handleScanlinesChange}
                aria-label="CAUTION: Drag and Drop disabled when scanlines are ON"
              >
                Scanlines {scanlines ? "ON" : "OFF"}
              </button>
            </span>
            <span>
              <button
                className="camera"
                onClick={capture}
                aria-label="Download screenshot"
              />
              <a
                className="link-button"
                href={buildUrl()}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Share link"
              >
                www
              </a>
            </span>
            <span>
              <button
                className="hotkeys"
                onClick={() => toggleModal("modalHotkeysHelp")}
                aria-label="Hotkeys help"
                aria-controls="modalHotkeysHelp"
                aria-expanded={state.modal === "modalHotkeysHelp"}
              >
                Hotkeys
              </button>
              <button
                className="legend"
                onClick={() => toggleModal("modalLegend")}
                aria-label="Legend"
                aria-controls="modalLegend"
                aria-expanded={state.modal === "modalLegend"}
              >
                Legend
              </button>
            </span>
          </div>
        </Legend>
      </div>
    </Hotkeys>
  );
};
