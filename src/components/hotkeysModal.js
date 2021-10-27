import React, { Fragment } from "react";

export const HotkeysModal = () => (
  <Fragment>
    <p className="subtitle">When the grid area is focused (white border)</p>

    <h3>Move player 1 by a pixel</h3>
    <p>
      <kbd>Ctrl</kbd> + <kbd>Left</kbd>|<kbd>Right</kbd>|<kbd>Up</kbd>|
      <kbd>Down</kbd>
    </p>
    <h3>Move player 2 by a pixel</h3>
    <p>
      <kbd>Alt</kbd> + <kbd>Left</kbd>|<kbd>Right</kbd>|<kbd>Up</kbd>|
      <kbd>Down</kbd>
    </p>
    <h3>Change player 1 step</h3>
    <p>
      <kbd>Shift</kbd> + <kbd>Left</kbd>|<kbd>Right</kbd>
    </p>
    <h3>Change player 2 step</h3>
    <p>
      <kbd>Shift</kbd> + <kbd>Up</kbd>|<kbd>Down</kbd>
    </p>
  </Fragment>
);
