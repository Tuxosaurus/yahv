import React, { useContext, useEffect, useRef } from "react";
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
  const forwardClass = state.forward === playerId ? "forward" : "";
  const mirroredClass = state[playerId].mirror ? "mirror" : "";
  const transparentClass = state[playerId].transparent ? "transparent" : "";

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
    <Draggable bounds="parent" onMouseDown={forceForwardChange}>
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
