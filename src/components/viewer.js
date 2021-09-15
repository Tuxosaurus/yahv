import React, { Fragment, useContext, useRef, useState } from "react";
import html2canvas from "html2canvas";

import { Canvas } from "./canvas.js";
import { Legend } from "./legend.js";
import { store } from "./store.js";
import { StepSelector } from "./stepSelector.js";
import { getStepImageFilename } from "../data/utils";

import "../styles/viewer.css";

const darkBg = "#333";
const mediumBg = "#777";
const brightBg = "#aaa";
const validBgs = [darkBg, mediumBg, brightBg];

const validZooms = [1, 2, 3];

function retrieveStepImage(stepFilename) {
  const img = require(`../assets/images/${stepFilename}`);

  if (!img) {
    return null;
  }

  return img.default;
}

export const Viewer = () => {
  const globalState = useContext(store);
  const { state } = globalState;
  const { p1, p2 } = state;

  const [background, setBackground] = useState(mediumBg);
  const [zoom, setZoom] = useState(validZooms[1]);
  const [cps2, setCps2] = useState(false);
  const [scanlines, setScanlines] = useState(false);
  const boardRef = useRef(null);

  function buildUrl() {
    let url = `?forward=${state.forward}`;
    if (p1.selectedMoveSlug !== "-") {
      url += `&p1=${p1.selectedMoveSlug}-${p1.selectedStepNumber}`;
    }
    if (p2.selectedMoveSlug !== "-") {
      url += `&p2=${p2.selectedMoveSlug}-${p2.selectedStepNumber}`;
    }

    return url;
  }

  function handleZoomChange(event) {
    const validZoom = validZooms.includes(Number(event.target.value))
      ? Number(event.target.value)
      : validZooms[1];

    setZoom(validZoom);
  }

  function handleBackgroundChange(event) {
    const validBg = validBgs.includes(event.target.value)
      ? event.target.value
      : mediumBg;

    setBackground(validBg);
  }

  function handleCps2Change() {
    setCps2(!Boolean(cps2));
  }

  function handleScanlinesChange() {
    setScanlines(!Boolean(scanlines));
  }

  function capture() {
    html2canvas(boardRef.current).then(function (canvas) {
      window.open(canvas.toDataURL(), "_blank");
    });
  }

  const stepFilenameP1 =
    p1.selectedMoveSlug !== "-"
      ? getStepImageFilename(p1.selectedMoveSlug, Number(p1.selectedStepNumber))
      : null;

  const stepFilenameP2 =
    p2.selectedMoveSlug !== "-"
      ? getStepImageFilename(p2.selectedMoveSlug, Number(p2.selectedStepNumber))
      : null;

  const stepImageP1 = stepFilenameP1 ? retrieveStepImage(stepFilenameP1) : null;
  const stepImageP2 = stepFilenameP2 ? retrieveStepImage(stepFilenameP2) : null;

  if (!stepImageP1 && !stepImageP2) {
    return null;
  }

  return (
    <Fragment>
      <div className="Viewer-controls">
        <StepSelector playerId="p1" />
        <StepSelector playerId="p2" />
      </div>
      <div className="Viewer">
        <div
          ref={boardRef}
          className={`board${scanlines ? " scanlines" : ""}`}
          style={{
            backgroundColor: background,
          }}
        >
          {stepImageP1 && (
            <Canvas playerId="p1" image={stepImageP1} zoom={zoom} cps2={cps2} />
          )}
          {stepImageP2 && (
            <Canvas playerId="p2" image={stepImageP2} zoom={zoom} cps2={cps2} />
          )}
        </div>
        <div className="board-controls">
          <span>
            <button
              value={darkBg}
              onClick={handleBackgroundChange}
              disabled={background === darkBg}
            >
              Dark
            </button>
            <button
              value={mediumBg}
              onClick={handleBackgroundChange}
              disabled={background === mediumBg}
            >
              Medium
            </button>
            <button
              value={brightBg}
              onClick={handleBackgroundChange}
              disabled={background === brightBg}
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
          <span>
            <button
              onClick={handleCps2Change}
              title="Pixel ratio as seen on original hardware (approximation)"
            >
              CPS2 {cps2 === true ? "ON" : "OFF"}
            </button>
            <button
              onClick={handleScanlinesChange}
              title="CAUTION: Movement disabled when scanlines are ON"
            >
              Scanlines {scanlines ? "ON" : "OFF"}
            </button>
          </span>
          <span>
            <button onClick={capture} title="Smile ;)">
              &#128247;
            </button>
            <a
              className="link-button"
              href={buildUrl()}
              target="_blank"
              rel="noreferrer noopener"
            >
              www
            </a>
          </span>
        </div>
        <Legend />
      </div>
    </Fragment>
  );
};
