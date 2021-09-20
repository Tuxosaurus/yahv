import React, { useContext, useEffect, useRef, useState } from "react";

import { store } from "./store.js";

import "../styles/canvas.css";

const forwardP1 = "p1";
const forwardP2 = "p2";
const initialPosition = { x: 200, y: 50 };
const minRestartPosition = { x: 0, y: 0 };
const maxRestartPosition = { x: 850, y: 300 };
const minPosition = { x: -100, y: -100 };
const maxPosition = { x: 920, y: 400 };

export const Canvas = ({ image, playerId, zoom = 2, cps2 = false }) => {
  const globalState = useContext(store);
  const { dispatch, state } = globalState;
  const [stepPosition, setStepPosition] = useState(initialPosition);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const isP1 = playerId === "p1";
  const ratioFix = cps2 ? 1.2 : 1;
  const forwardClass = state.forward === playerId ? "forward" : "";
  const mirroredClass = state[playerId].mirror ? "mirror" : "";
  const transparentClass = state[playerId].transparent ? "transparent" : "";

  function handleForwardChange() {
    dispatch({
      type: "forwardChange",
      payload: state.forward === forwardP1 ? forwardP2 : forwardP1,
    });
  }

  function handleMirrorChange() {
    dispatch({
      type: "mirrorChange",
      payload: { playerId: playerId },
    });
  }

  function handleTransparentChange() {
    dispatch({
      type: "transparentChange",
      payload: { playerId: playerId },
    });
  }

  function startCursor(event) {
    setCursorPosition({
      x: event.screenX,
      y: event.screenY,
    });
  }

  function getDiffPosition(axis, stopPosition) {
    let diff = stepPosition[axis];
    const raw = cursorPosition[axis] - stopPosition;

    if (axis === "x") {
      isP1 ? (diff -= raw) : (diff += raw);
    } else {
      diff += raw;
    }

    if (diff < minPosition[axis]) {
      return minRestartPosition[axis];
    }

    if (diff > maxPosition[axis]) {
      return maxRestartPosition[axis];
    }

    return diff;
  }

  function stopCursor(event) {
    const diff = {
      x: getDiffPosition("x", event.screenX),
      y: getDiffPosition("y", event.screenY),
    };

    setStepPosition({
      x: diff.x,
      y: diff.y,
    });
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (image) {
      const img = new Image();
      img.src = image;
      img.onload = function () {
        const canvasW = (img.width * zoom) / ratioFix;
        const canvasH = img.height * zoom;
        canvas.width = canvasW;
        canvas.height = canvasH;
        context.imageSmoothingEnabled = false;

        if (isP1) {
          context.drawImage(img, 0, 0, canvasW, canvasH);
        } else {
          context.scale(-1, 1);
          context.drawImage(img, 0, 0, canvasW * -1, canvasH);
        }
      };
    }
  }, [image, isP1, ratioFix, zoom]);

  const stylePosition = ({ x, y }) => {
    return {
      left: isP1 ? `${x}px` : "auto",
      right: !isP1 ? `${x}px` : "auto",
      bottom: y + "px",
    };
  };

  return (
    <div
      className={`Canvas Canvas-${playerId} ${forwardClass} ${transparentClass}`}
      style={stylePosition(stepPosition)}
      onDragStart={startCursor}
      onDragEnd={stopCursor}
      draggable="true"
    >
      <canvas ref={canvasRef} className={mirroredClass} />
      <ul className="Canvas-controls">
        <li
          className="transparent-button"
          role="button"
          onClick={handleTransparentChange}
          title="Make transparent"
        >
          T
        </li>
        <li
          className="mirror-button"
          role="button"
          onClick={handleMirrorChange}
          title="Mirror image"
        >
          M
        </li>
        <li
          className="forward-button"
          role="button"
          onClick={handleForwardChange}
          title="Bring forward"
        >
          <span className="p1">&#8321;</span>
          <span className="p2">&#178;</span>
        </li>
      </ul>
    </div>
  );
};
