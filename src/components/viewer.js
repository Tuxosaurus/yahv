import React, { Fragment, useContext, useRef, useState } from "react";
import html2canvas from "html2canvas";

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
      url += `&p1=${p1.selectedMoveSlug}-${p1.selectedStepNumber}${
        p1.transparent ? "t" : ""
      }${p1.mirror ? "m" : ""}`;
    }
    if (p2.selectedMoveSlug !== "-") {
      url += `&p2=${p2.selectedMoveSlug}-${p2.selectedStepNumber}${
        p2.transparent ? "t" : ""
      }${p2.mirror ? "m" : ""}`;
    }

    return url;
  }

  function handleZoomChange(event) {
    dispatch({ type: "zoomChange", payload: event.target.value });
  }

  function handleBackgroundChange(event) {
    dispatch({ type: "backgroundChange", payload: event.target.value });
  }

  function handleCps2Change() {
    dispatch({ type: "cps2Change" });
  }

  function handleScanlinesChange() {
    dispatch({ type: "scanlinesChange" });
  }

  function capture() {
    const { width, height } = boardRef.current.getBoundingClientRect();
    const options = {
      width: width,
      height: height,
      windowWidth: width,
      windowHeight: height,
    };
    html2canvas(boardRef.current, options).then(function (canvas) {
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
          <span>
            <button
              onClick={handleCps2Change}
              title="Pixel ratio as seen on original hardware (approximation)"
            >
              CPS2 {cps2 ? "ON" : "OFF"}
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