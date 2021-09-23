import React, { useContext, useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";

import { store } from "./store.js";

import "../styles/canvas.css";

const forwardP1 = "p1";
const forwardP2 = "p2";

export const Canvas = ({ image, playerId, zoom = 2, cps2 = false }) => {
  const globalState = useContext(store);
  const { dispatch, state } = globalState;
  const canvasRef = useRef(null);
  const isP1 = playerId === "p1";
  const ratioFix = cps2 ? 1.2 : 1;
  const playerState = state[playerId];
  const forwardClass = state.forward === playerId ? "forward" : "";
  const mirroredClass = playerState.mirror ? "mirror" : "";
  const transparentClass = playerState.transparent ? "transparent" : "";
  const [deltaPosition, setDeltaPosition] = useState({
    x: parseInt(playerState?.position?.x) || 0,
    y: parseInt(playerState?.position?.y) || 0,
  });

  function recordDrag(event, ui) {
    event.preventDefault();
    const { x, y } = deltaPosition;
    const { deltaX, deltaY } = ui;

    if (!isNaN(deltaX) && !isNaN(deltaY)) {
      setDeltaPosition({
        x: x + deltaX,
        y: y + deltaY,
      });
    }
  }

  function handleDrag() {
    const { x, y } = deltaPosition;
    dispatch({
      type: "positionChange",
      payload: {
        playerId: playerId,
        position: {
          x: x,
          y: y,
        },
      },
    });
  }

  function forceForwardChange() {
    dispatch({
      type: "forwardChange",
      payload: isP1 ? forwardP1 : forwardP2,
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

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

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
  }, [image, isP1, ratioFix, zoom]);

  return (
    <Draggable
      defaultPosition={{
        x: deltaPosition.x,
        y: deltaPosition.y,
      }}
      bounds="parent"
      onMouseDown={forceForwardChange}
      onDrag={recordDrag}
      onStop={handleDrag}
    >
      <div
        className={`Canvas Canvas-${playerId} ${forwardClass} ${transparentClass}`}
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
        </ul>
      </div>
    </Draggable>
  );
};
